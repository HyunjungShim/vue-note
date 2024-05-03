<template>
      <div class="container-header pt-2 pb-2">
        <h1>Notes App</h1>
      </div>
      <container class="container-search mt-6" >
          <v-text-field
            :loading="loading"
            append-inner-icon="mdi-magnify"
            density="compact"
            label="Search"
            variant="solo"
            hide-details
            single-line
            @click:append-inner="onClick"
            color="#DEDEDF"
            v-model="searchQuery"
          ></v-text-field>
          <v-select
          style="margin-top: 22px;"
          class="ml-2"
            :items="sortType"
            label="filter"
            density="compact"
            v-model="currentSort"
          ></v-select>
      </container>
      <div class="list-container min-height mb-2 mt-6">
        <ul v-if="filteredItems.length > 0">
          <li v-for="(item,i) in filteredItems" :key="i" class="mb-4" @click="$router.push('/detail/'+item.id)">
            <div>
              <h1>{{ item.title}}</h1>
              <p>{{ item.content }}</p>
            </div>
              <span>{{ displayDate(item.date) }}</span>
          </li>
        </ul>
        <div v-else-if="filteredItems.length <=0" class="nodata_container">
          <img :src="addIcon"/>
          <h1>작성한 메모가 존재하지 않습니다.</h1>
        </div>
      </div>
      <div class="container-footer pt-2 pb-2">
            <v-btn
              prepend-icon="mdi-plus"
              variant="elevated"
              color="#5865f2"
            >
            <router-link to="/write">
              Create Note
            </router-link>
            </v-btn>
      </div>
</template>

<script>
import addIcon from '@/assets/image/noData.jpg';
import {mapState,mapGetters } from 'vuex';
import { displayDate} from '@/utils/convertDate.js';
  export default {
    name:"ListComponent",
    data() {
      return {
        sortType: ['Newest', 'Oldest'],
        searchQuery:"",
        currentSort:"Newest",
        addIcon:addIcon
      }
    },
    computed:{
      ...mapState('list',['listItems','updateIndex']),
      ...mapGetters('list',['orderByDesc','orderByAsc']),
      filteredItems(){
        let lowerValue = this.searchQuery.toLowerCase();
        if(this.currentSort == "Newest"){
          return this.orderByDesc.filter(item =>
            (item.title && item.title.toLowerCase().includes(lowerValue)) ||
            (item.content && item.content.toLowerCase().includes(lowerValue))
          );
        }else {
          return this.orderByAsc.filter(item =>
            (item.title && item.title.toLowerCase().includes(lowerValue)) ||
            (item.content && item.content.toLowerCase().includes(lowerValue))
          );
        }
      },
    },
    created(){
      this.orderByDesc
    },
    methods:{
      displayDate,
    },
    watch:{
      currentSort(newValue){
        console.log(newValue);
      }
    }
  }
</script>

<style scoped>

</style>
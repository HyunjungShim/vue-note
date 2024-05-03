<template>
      <div class="container-header pt-2 pb-2">
          <router-link to="/">
            <v-btn icon="mdi-menu" class="ml-2" style="display:block; margin-right:auto" size="small"></v-btn>
          </router-link>
      </div>
      <div class="write-container">
        <div class="write-title mb-2">
          <v-text-field
            :rules="rules"
            hide-details="auto"
            v-model="listTitle"
            variant="solo"
            density="compact"
          ></v-text-field>
        </div>
        <div class="min-height">
          <v-textarea
          v-model="listContent"
          ></v-textarea>
        </div>
      </div>
      <v-btn :variant="tonal" @click="saveList">Save</v-btn>
</template>

<script>
import { mapMutations,mapState} from 'vuex';
  export default {
    name:"WriteComponent",
    data(){
        return {
          listTitle:"",
          listContent:"",
          date:new Date(),
        }
    },
    computed:{
      ...mapState('list',['listItems']),
      count(){
        return (this.listItem).length + 1;
      }
    },
    methods:{
      ...mapMutations('list',['addListItem']),
      saveList(){
        let formatDate = (this.date).getTime();
        this.addListItem(
          {
          title:this.listTitle,
          content:this.listContent,
          date:formatDate
          }
        )
        this.$router.push('/');
      },
    },
    watch:{
      listContent(newVal,oldVal){
        console.log('oldVal',oldVal,'newVal',newVal);
        if(newVal.replace(/(\s*)/g, "").length > 500){
          alert('500자 이하만 가능합니다.');
          this.listContent = oldVal;
        }
      }
    }
  }
</script>
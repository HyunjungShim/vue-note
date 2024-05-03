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
            v-model="updateTitle"
            variant="solo"
            density="compact"
          ></v-text-field>
        </div>
        <div class="min-height">
          <v-textarea v-model="updateContent">
          </v-textarea>
        </div>
      </div>
      <v-card-actions>
        <v-btn variant="elevated" color="#5865f2" @click="editList">Edit</v-btn>
        <v-btn prepend-icon="mdi-delete-outline" variant="elevated" color="#E7514E" @click="deletList">Delete</v-btn>
      </v-card-actions>
</template>

<script>
import { mapState,mapMutations } from 'vuex';
export default {
    name: "ListDetailComponent",
    data() {
      return {
        updateId:0,
        updateContent:"",
        updateTitle:"",
        date:new Date()
      }
    },
    mounted(){
      if(this.postItem) {
        this.updateId = this.postItem.id;
        this.updateContent = this.postItem.content;  // 로컬 상태 초기화
        this.updateTitle = this.postItem.title;      // 로컬 상태 초기화
      }
    },
    methods:{
      ...mapMutations('list',['editListItem','deleteListItem']),
      editList(){
        let formatDate = (this.date).getTime();
        this.editListItem({
          id:this.updateId,
          title:this.updateTitle,
          content:this.updateContent,
          date:formatDate
        })
        alert('수정이 완료되었습니다.')
        window.location.reload();
      },
      deletList(){
        this.deleteListItem({
          id:this.postItem.id
        })
        this.$router.push('/');
      }
    },
    computed: {
      ...mapState('list', ['listItems']),
      postItem(){
        return (this.listItems.find(el=> el.id == this.$route.params.id))
      },
    }
}
</script>

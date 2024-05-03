<template>
    <div class="notfound_wrapper">
        <img :src="imagePath" class="image_wrapper"/>
        <h1>죄송합니다. 해당 페이지를 찾을 수 없습니다.</h1>
        <h2>{{ backSecond }}초 후, 메인페이지로 돌아갑니다.</h2>
    </div>
</template>

<script>
import notFoundImage from '@/assets/image/notFound.png';
export default {
    name:"NotFound",
    data(){
        return{
            imagePath:notFoundImage,
            backSecond:3
        }
    },
    mounted(){
        let counter = setInterval(()=> {
            if(this.backSecond >0){
                this.backSecond--;
            }
            else {
                this.$router.replace('/');
                clearInterval(counter);
            }
        },1000)
    },
}
</script>
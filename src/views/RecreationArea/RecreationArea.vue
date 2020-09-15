<template>
  <div class="file">
    <label for="fileInput">Escolha o arquivo</label>
    <input type="file" id="fileInput" @change="fileHandler" ref="file" />
    {{file}}
  </div>
</template>
<script>
export default {
  name: "RecreationArea",
  data() {
    return {
      file: [],
    };
  },
  methods: {
    fileHandler(e) {
     // console.log(e.target.files[0].name);
      const fileList= e.target.files;
      let resp=[];
      fileList.forEach((file)=>{
          resp.push(file.name)
         // console.log(e.dataTransfer.files)
         
      });
      console.log(e.target.files[0])
      this.file=resp
      
    },
  }
  
  ,
};
</script>
<style lang="scss" scoped>
@import "./RecreationArea.scss";
</style>

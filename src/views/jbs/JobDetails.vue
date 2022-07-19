<template>
<div v-if="job ">
  <h1>JOB DETAILS</h1>
  <h2>{{job.title}}</h2>
  <!-- <p>job id is {{$route.params.id}}</p>     by this you can directly pass the router id -->
  <h3>{{job.details}}</h3>
  <p>JOB ID ::{{id}}</p>
</div>
  

  </template>

<script>
export default {
props:['id'],  // we can also accept route parameter as props from the componenet in which we dynamically define the route parameter
data(){
   return {
//        id: this.$route.params.id,    // or we can first store it in data object
          job:null
   }
  },
mounted(){
  fetch('http://localhost:3000/jobs/' + this.id).then(res=>res.json()).then((data)=>this.job = data).catch(err=>console.log(err.message))
  console.log('component mounted')
}
}
</script>

<style>

</style>
<template>
<h2>Modifiers in Vue js</h2>
<br />
<hr />
<br />
<br />
<div>{{JSON.stringify(formValues, Null, 2)}}</div>
<br /><br />
<form @submit.prevent="submitFrom">
    <div>
        <label for="name">Name</label> 
        <input type="text" id="name"  v-model.trim.lazy="formValues.name"/>
    </div>
    <br /><br />
    <div> 
        <label for="profile">Profile Summary</label> 
        <textarea id="profile"  v-model="formValues.profile"/>
    </div>
    <br /><br />
    <div> 
        <label for="country">Country</label> 
       <select id="country" v-model="formValues.country">
           <option value="">Select a country</option>
           <option value="India">India</option>
           <option value="USA">USA</option>
           <option value="Canada">Canada</option>
       </select>
    </div>
    <br /><br />
      <div> 
        <label for="job">Job Location</label> 
       <select id="job" multiple v-model="formValues.job">
           <option value="India">India</option>
           <option value="USA">USA</option>
           <option value="Canada">Canada</option>
       </select>
    </div>
    <br /><br />
      <div> 
          <input type="checkbox" id="remote"  v-model="formValues.remoteWork" />
        <label for="remote">Open to remote work?</label> 
    </div>
    <br /><br />
      <div> 
          <input type="checkbox" id="remote"  v-model="formValues.remoteYesNo" true-value="yes" false-value="no" />
        <label for="remote">Open to remote work?</label> 
    </div>
    <br /><br />
      <div> 
           <label>Skill Set</label> <br /><br />
            <input type="checkbox" id="html" value="html"  v-model="formValues.skillSet" />
            <label for="html">HTML</label> 
             <input type="checkbox" id="css" value="css"  v-model="formValues.skillSet" />
            <label for="css">CSS</label> 
             <input type="checkbox" id="js" value="javascript"  v-model="formValues.skillSet" />
            <label for="js">javascript</label> 
    </div>
    <br /><br />
     <div> 
           <label>Year of Experience</label> <br /><br />
            <input type="radio" id="0-2" value="0-2"  v-model="formValues.experience" />
            <label for="0-2">0-2</label> 
             <input type="radio" id="3-5" value="3-5"  v-model="formValues.experience" />
            <label for="3-5">3-5</label> 
             <input type="radio" id="5-10" value="5-10"  v-model="formValues.experience" />
            <label for="5-10">5-10</label> 
             <input type="radio" id="10+" value="10+"  v-model="formValues.experience" />
            <label for="10+">10+</label> 
    </div>
    <br /><br />
     <div> 
            <label for="age">Age</label> 
            <input type="number" id="age" v-model.number="formValues.age" />        
    </div>
    <br /><br />
    <div> 
            <label for="test">Testing Modifier</label> 
            <input type="text" id="test" @keyup="test" />        
    </div>
    <br /><br />
     <div> 
         <button type="submit">Submit</button>
    </div>
    <br /><br />
</form>

</template>
<script>
export default{
    name: 'ModifiersVue',
    data(){
        return {
           formValues: {
             name: '',
             profile: '',
             country: '',
             job: [],
             remoteWork: false,
             remoteYesNo: 'no',
             skillSet: [],
             experience: '',
             age: ''
           }
           
        }
    },
    methods: {
        submitFrom(){
            console.log('Form Data', this.formValues)
        },
        test(){
            console.warn('Testing keyup with calling this function with the help of modifier')
        }
    }

}
</script>
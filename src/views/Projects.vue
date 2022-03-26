<template>
    <div class="projects">
        <v-container>
            <h1 class="headline grey--text">Projects</h1>
            <v-expansion-panels class="mt-10">
                <v-expansion-panel v-for="project in myProjects" :key="project.title">
                    <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
                    <v-expansion-panel-content>{{ project.content }}</v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
      
        </v-container>
    </div>
</template>

<script>
import { colRef, onSnapshot } from '../../fb.js';

export default {
 data() {
     return {
        projects: []
     }
 },
 computed: {
     myProjects() {
        return this.projects.filter(project => {
             return project.person === 'Ryu';
        })
     }
 },
created() {
    onSnapshot(colRef, (snapshot) => {
      this.projects = [];
      snapshot.docs.forEach((doc) => {
        this.projects.push({...doc.data(), id: doc.id})
      })
    })
  },
}
</script>

<style>

</style>
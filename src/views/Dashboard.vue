<template>
  <div class="dashboard">
    <v-container mt-10>
      <h1 class="headline grey--text mb-5">Dashboard</h1>
      <v-row class="mb-3 pl-3">
        <v-tooltip top>
          <template v-slot:activator="{on, attrs}">
            <v-btn small text @click="sortBy('title')" v-bind="attrs" v-on="on" class="pa-1 mr-1">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">by project name</span>
            </v-btn>
          </template>
          <span>sort projects by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{on, attrs}">
            <v-btn small text @click="sortBy('person')" v-bind="attrs" v-on="on" class="pa-1">
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">by person</span>
            </v-btn>
          </template>
          <span>sort projects by person</span>
        </v-tooltip>
      </v-row>

      <v-card v-for="project in projects" :key="project.title" class="pa-3">
        <v-row :class="`pa-3 project ${project.status}`">
          <v-col cols="12" md="6">
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div>{{ project.dueDate }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div>
              <v-chip id="chip" small :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
  import { colRef, onSnapshot } from '../../fb.js';

  export default {
    name: 'Dashboard',
    data() {
      return {
        projects: [],
    }
  },
  methods: {
    sortBy(property) {
      this.projects.sort((a, b) => a[property] < b[property] ? -1 : 1);
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
.project.complete{
  border-left: 4px solid #3CD1C2;
}
.project.ongoing{
  border-left: 4px solid orange
}
.project.overdue{
  border-left: 4px solid tomato;
}
#chip.v-chip.complete{
  background: #3CD1C2;
}
#chip.v-chip.ongoing{
  background: orange;
}
#chip.v-chip.overdue{
  background: tomato;
}
</style>


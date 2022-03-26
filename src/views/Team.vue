<template>
  <div class="team">
    <h1 class="headline grey--text">Team</h1>
    <v-container mt-10>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="teammate in team" :key="teammate.name">
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey">
                <img :src="teammate.avatar" alt="">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ teammate.name }}</div>
              <div class="grey--text">{{ teammate.role }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      team: [
        { name: 'Ryu', role: 'Graphic designer', avatar: '/avatar-1.png' },
        { name: 'Chun Li', role: 'Web developer', avatar: '/avatar-2.png' },
        { name: 'Gouken', role: 'Journalist', avatar: '/avatar-3.png' },
        { name: 'Yoshi', role: 'Photographer', avatar: '/avatar-4.png'}
      ]
    }
  }
}
</script>
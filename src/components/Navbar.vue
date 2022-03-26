<template>
    <nav>
        <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
            <span>Awesome! You added a new project.</span>
            <v-btn text small right @click="snackbar = false">CLOSE</v-btn>
        </v-snackbar>

        <v-app-bar app hide-on-scroll flat color="error">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase">
                <span class="font-weight-light">TEUX</span>
                <span>DEUX</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- <v-btn plain>
                <span>Sign Out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn> -->
        </v-app-bar>
        <v-navigation-drawer app class="accent" v-model="drawer" dark>
            <v-col class=" mt-5 d-flex flex-column">
                <v-avatar size="100" class="mx-auto justify-center">
                    <img src="/avatar-1.png" alt="">
                </v-avatar>
                <h3 class="mx-auto mt-2 white--text">Ryu</h3>
            </v-col>
           
           <Popup @project-added="snackbar = true"/>
           
            <v-list>
                <v-list-item-group>
                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-item-icon><v-icon>{{ link.icon }}</v-icon></v-list-item-icon>
                        <v-list-item-content>{{ link.text }}</v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import Popup from './Popup.vue';

export default {
    components: { Popup },
    data() {
        return {
            drawer: false,
            links: [{
                icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/'
            }, {
                icon: 'mdi-folder', text: 'My Projects', route: '/projects'
            }, {
                icon: 'mdi-account', text: 'Team', route: '/team'
            }],
            snackbar: false
        }
    }
}
</script>

<style>

</style>
<template>
  <div class="text-center my-2">
    <v-dialog v-model="dialog" width="600">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="grey" class="lighten-2 black--text" v-bind="attrs" v-on="on">Add a new project</v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5">Add a new project</v-card-title>

        <v-card-text>
            <v-form>
                <v-text-field label="title" v-model="title"></v-text-field>
                <v-textarea label="Description" color="#1C2321" v-model="description"></v-textarea>
                <v-menu
                    v-model="menu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        :value="dueDate"
                        v-model="dueDate"
                        label="Due date"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-date-picker
                    v-model="dueDate"
                    @input="menu = false"
                    ></v-date-picker>
                </v-menu>
            </v-form>
        </v-card-text>

        
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#1C2321" class="white--text" @click="submit">Add project</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { db, addDoc, colRef } from '../../fb.js';

export default {
    data() {
        return {
            dialog: false,
            title: '',
            description: '',
            dueDate: null,
            menu: false,
        }
    },
    methods: {
        submit() {
            this.dialog = false;
            const project = {
                title: this.title,
                description: this.description,
                dueDate: this.dueDate,
                person: 'Ryu',
                status: 'ongoing',
            }
            addDoc(colRef, project);
            this.$emit('project-added');
        }
    },
}
</script>

<style>

</style>
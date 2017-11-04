<template lang="pug">
   #app
     .container
      h1.title.is-1.has-text-centered Gestor de Tareas
      .field.is-3( v-show="!name")
        .control
          input#name.input.is-primary(
          type='text',
          placeholder='Ingresa tu nombre ',
          v-model='newName')
          a.button.is-primary(type="submit", @click="addName") Ok
      span(v-show="name") Tareas de {{ name }}
      hr
      .columns
        .column
          h2.title.is-3.has-text-centered Agregar Tarea
          .columns.is-mobile
            .column.is-three-quarters
              .field
                .control
                  input.input.is-primary(
                  type='text',
                  placeholder='Tarea ',
                  v-model='newTask.title')
            .column
              .field
                .control
                  input.input.is-warning(
                  type='number',
                  placeholder='0',
                  v-model='newTask.time')
              a.button.is-primary(@click="nuevaTarea") +
        .column
          h2.title.is-3.has-text-centered Lista de Tareas
          .block
            ul
              li(v-for="( tarea, index) in tasks")
                span.tag.is-primary {{ tarea.title }} {{ tarea.time }}
                  button.delete.is-small(@click="removeTask(index)")
        .column
          h2.title.is-3.has-text-centered Tiempo requerido
          .tags.has-addons
            span.tag.is-medium.is-warning {{ totalHoras }}
            span.tag.is-primary.is-medium Horas
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      newName: null,
      name: '',
      tasks: [],
      newTask: {
        title: '',
        time: null
      }
    }
  },

  created () {
    this.name = JSON.parse(window.localStorage.getItem('name'))
    this.tasks = JSON.parse(window.localStorage.getItem('tasks')) || []
  },

  computed: {
    totalHoras () {
      if (!this.tasks.length) { return 0 }

      let total = 0
      this.tasks.forEach(tarea => {
        total += parseInt(tarea.time)
      })

      return total
    }
  },
  methods: {
    addName () {
      this.name = this.newName
      window.localStorage.setItem('name', JSON.stringify(this.name))
    },
    nuevaTarea () {
      if (this.newTask.title && this.newTask.time) {
        this.tasks.unshift({
          title: this.newTask.title,
          time: this.newTask.time
        })
        window.localStorage.setItem('tasks', JSON.stringify(this.tasks))
        this.newTask.title = ''
        this.newTask.time = null
      }
    },
    removeTask (index) {
      this.tasks.splice(index, 1)
      window.localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
;
  .results {
    margin-top: 50px;
  }
  #name{
   box-shadow:none;
   border-top: none;
   border-right: none;
   border-left:none;
   width:20%;
 }
</style>

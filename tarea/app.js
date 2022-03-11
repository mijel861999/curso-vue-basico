new Vue({
  el: '#app',

  
  
  data () {
    return {
        courses: [],
        title: '',
        time: 0,
        msg: '',
    }
  },
  
  computed: {
      totalTime() {
        total  = 0
        this.courses.map( curso => {
            total = parseInt(total) + parseInt(curso.time)
        })
        return total
      }
  },
  
  methods: {
      addCourse() {
        if(!this.title) {
            this.msg = "Complete el título"
            return
        }else if(!this.time) {
            this.msg = "Compelte las horas"
            return
        }

        
        this.courses.push({
            title: this.title,
            time: parseInt(this.time)
        })
        this.msg = ""
      }
  }
})
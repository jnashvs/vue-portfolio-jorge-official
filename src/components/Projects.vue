<template>
  <div class="componentheader pb-4">
    <div class="container projects-components">
      <div class="row m-1">
        <div class="col-md-8 col-sm-12">
          <p class="text-uppercase my-4 text-info">Give a check about my projects</p>
          <p class="justify-text">
            Above you can achieve some of my meaning projects, where i used
            different technology and modern web application aproach. Contrary to
            popular belief, Lorem Ipsum is not simply random text. It has roots
            in a piece of classical Latin literature from 45 BC, making it over
            2000 years old.
          </p>
        </div>
      </div>
      
      <div
        class="row project-card m-1 my-4"
        data-toggle="modal"
        data-target="#portfolioModal"
        data-portfolio-tag="landing-pages"
        v-for="(project, index) in projects"
        :key="index"
      >
        <div class="col-md-6 col-lg-5 col-sm-12 project-card__img">

          <img class v-bind:src="project.img" alt="project-img" @click="modalopen(project.id)"/>

          <modal :id="project.id" :title="project.title" :img="project.img" :description="project.resume"> </modal>
          
        </div>
        <div class="col-md-6 col-lg-7 col-sm-12 project-card__info mt-4">
          <h5 class="project-card__title px-4">{{ project.title }}</h5>
          <p class="project-card__description text-justify p-4">
            {{ project.resume }}
          </p>
          <p class="project-card__stack px-4">Used stack:</p>

          <ul class="tags">
            <li
              class="popoverData"
              v-for="(tag, index) in project.tags"
              :key="index"
              v-bind:data-content="event(tag)"
              rel="popover"
              data-placement="top"
              v-bind:data-original-title="tag"
              data-trigger="hover"
            >
              {{ tag }}
            </li>
          </ul>
          <a v-bind:href="project.link" class="project-card__link p-4">{{
            project.link
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
    name: 'Projects',
    props: [],
    mounted() {

        $('.popoverData').popover();
        $('#popoverOption').popover({ trigger: "hover", delay: { "show": 5000, "hide": 1000 } });

        $(function () {
            $('[data-toggle="popover"]').popover()
        })

    },
    data: () => ({
        projects: [{
                id: 1,
                img: 'https://www.bestcomputerscienceschools.net/wp-content/uploads/2017/07/best-online-masters-computer-science.jpg',
                title: 'Bootstrap Framework',
                resume: 'Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye. Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham.',
                tags: ['html', 'css', 'javascript', 'vuejs'],
                link: 'www.uniteltnais.cv',
            },
            {
                id: 2,
                img: 'https://engineering.buffalo.edu/content/engineering/computer-science-engineering/undergraduate/degrees-and-programs/ba-in-computer-science/jcr:content/par/image.img.447.auto.jpg/1560278866579.jpg',
                title: 'Project CV taxi praia',
                resume: 'As a freelance web developer and designer I collaborated with several graphic designers in Berlin and Melbourne, at the same time maintaining clients in Germany, Ireland, Australia and the UK. I have worked on a multitude of web and print based projects for a range of clients providing Web Design',
                tags: ['material', 'css', 'sass', 'vuejs'],
                link: 'www.cvmovel.cv',
            },

        ],
        lang: [{
            javascript: 'Speed. Client-side JavaScript is very fast because it can be run immediately within the client-side browser. Unless outside resources are required, JavaScript is unhindered by network calls to a backend server. JavaScript can also be used inside scripts written in other languages such as Perl and PHP.',
            html: 'HTML is the standard markup language for Web pages.With HTML you can create your own Website. HTML is easy to learn - You will enjoy it!',
            sass: 'jQuery is a JavaScript Library. jQuery greatly simplifies JavaScript programming. jQuery is easy to learn.',
            css: 'CSS is a language that describes the style of an HTML document. CSS describes how HTML elements should be displayed. This tutorial will teach you CSS from basic to advanced.',
            vuejs: 'Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.'
        }],

    }),
    methods: {

        event: function (lang) {

            let xpto = "";

            this.lang.forEach(element => {

                $.each(element , function(key, el) {
                        if(lang == key)
                            xpto = el;
                })

            });

            return xpto;
        },

        modalopen: function(id){
                $('#modal'+id).modal('toggle');
        }

    },
    computed: {

    }
}
</script>


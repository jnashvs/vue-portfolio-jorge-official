<template>
    <div class="componentheader">
    
        <div class="container experiences">
            <div class="row">
    
                <div class="col-12 my-4">
                    <p class="text-uppercase text-info">
                        employment
                    </p>
                </div>
                <div class="col-md-8 col-sm-10 jobs">
    
                    <div class="jobs-item" v-for="(item, index) in employment" :key="index">
                        <p class="font-weight-bold place_job">{{item.place_job}}</p>
                        <p class="date_job">{{item.date_job}}</p>
                        <p class="description_job text-justify">
                         {{item.description_job}}   
                        </p>
                    </div>
                </div>
            </div>
    
            <!-- abilities -->
    
            <div class="row row-abilities">
                <br>
                <div class="col-12 my-4">
    
                    <p class="text-uppercase text-info">
                        Skills
                    </p>
                </div>
    
                <div class="col-md-5 col-sm-12 list_abilities mx-2" v-for="(tech, index ) in techs" :key="index">
                    <li>
                        <p class="ability-score">
                            <span class="ability-title text-left"> {{tech.nome}} </span>
    
                            <span class="ability-stars text-right" v-if="(5 - tech.stars) > 0">
                                                          <i v-for="n in 5 - tech.stars" :key="n" class="fa fa-star inactive" aria-hidden="true"> </i>
                                                        </span>
    
                            <span class="ability-stars text-right">
                                                          <i v-for="n in tech.stars" :key="n" class="fa fa-star active" aria-hidden="true"> </i>
                                                        </span>
    
                        </p>
                    </li>
                </div>
    
            </div>
    
            <!-- TOOLS I USED  -->
    
            <div class="row tools_used my-4">
    
                <div class="col-12">
                    <p class="text-uppercase text-info">
                        some tools i used to use
                    </p>
                </div>
            </div>
    
            <div class="row tools_used_img">
    
                <div class="col-md-2 col-sm-4 col-xs-4" v-for="(tool, index) in tools" :key="index">
                    <p>
                        <img :src="tool.img">
    
                    </p>
                    <p><small>{{tool.nome}}</small> </p>
    
                </div>
    
            </div>
    
        </div>
    
    
    </div>
</template>

<script>
export default {
    name: 'Experiences',
    props: [],
    data: () => ({
        techs: [
            { id: 1, nome: 'Bootstrap Framework', stars: 4 },
            { id: 2, nome: 'Vue Js Framework', stars: 4 },
            { id: 3, nome: 'Yii2 Framework', stars: 4 },
            { id: 4, nome: 'Laravel Framework', stars: 4 },
            { id: 5, nome: 'HMTL', stars: 4 },
            { id: 6, nome: 'CSS', stars: 4 },
            { id: 7, nome: 'SASS', stars: 4 },
            { id: 8, nome: 'Java script', stars: 4 },
            { id: 9, nome: 'PHP', stars: 5 },
            { id: 10, nome: 'Python', stars: 3 },
            { id: 11, nome: 'Ionic', stars: 3 },
            { id: 12, nome: 'Git', stars: 4 },

        ],
        tools: [
            {id: 1, nome: 'vs code',img: 'https://img.icons8.com/color/64/000000/visual-studio-code-2019.png' },
            {id: 1, nome: 'vs code',img: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
            {id: 1, nome: 'chrome dev tools',img: 'https://img.icons8.com/nolan/64/chrome.png' },
            {id: 1, nome: 'git',img: 'https://img.icons8.com/color/64/000000/git.png' },
            {id: 1, nome: 'mysql workbanch',img: 'https://img.icons8.com/ios-filled/64/000000/mysql-logo.png' },
            {id: 1, nome: 'docker',img: 'https://img.icons8.com/dusk/64/000000/docker.png' },

        ],
        employment: [
            { id: 4, place_job: 'Full-Stack Web Developer, Slingshot, Lisbon - Portugal', date_job: 'oct. 2019 - now', description_job: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'},
            { id: 3, place_job: 'Freelancer Web Developer, Avirmãos, Assomada - Cape Verd', date_job: 'feb. 2019 - apr. 2019', description_job: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'},
            { id: 2, place_job: 'Software Engineer, JSMedia Lda, Praia - Cape Verd', date_job: 'mar. 2018 - jun. 2018', description_job: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'},
            { id: 1, place_job: 'Intership Backend Developer & Analyst, Bonako, Praia - Cape Verd', date_job: 'feb. 2018 - apr. 2018', description_job: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'},
            { id: 0, place_job: 'Intership Software Engineer, AIESEC International, Dakar - Senegal', date_job: 'aug. 2017 - sep. 2017', description_job: 'There i build a Digital web libraby for AIESEC Senegal, project who was including in a local goverment plan to help students to get books for free.'},
        ]
    }),
    mounted() {

    },
    methods: {

    },
    computed: {

    }
}
</script>

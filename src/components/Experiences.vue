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
    
                    <div class="jobs-item">
                        <p class="font-weight-bold place_job">Unitel t+, Praia - Cape Vert </p>
                        <p class="date_job">2006 - 2010</p>
                        <p class="description_job text-justify">
                            programmer Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
                    </div>
                    <div class="jobs-item">
                        <p class="font-weight-bold place_job">JSmedia lda, Dakar - Senegal </p>
                        <p class="date_job">2010 - 2015</p>
                        <p class="description_job text-justify">
                            There i build a Digital web libraby for AIESEC Senegal, project who was including in a local goverment plan to help students to get books for free.
                        </p>
                    </div>
                    <div class="jobs-item">
                        <p class="font-weight-bold place_job">Slingshot, Lisbon - Portugal </p>
                        <p class="date_job">201 - 2020</p>
                        <p class="description_job text-justify">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
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
                        tools i used to use
                    </p>
                </div>
            </div>
    
            <div class="row tools_used_img">
    
                <div class="col-md-2 col-sm-4 col-xs-4">
                    <p>
                        <img src="https://img.icons8.com/color/64/000000/visual-studio-code-2019.png">
    
                    </p>
                    <p><small>vs code</small> </p>
    
                </div>
    
                <div class="col-md-2 col-sm-4 col-xs-4">
                    <p>
                        <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman">
                    </p>
    
                    <p><small>postman</small> </p>
    
                </div>
    
                <div class="col-md-2 col-sm-4 col-xs-4">
    
                    <p>
                        <img src="https://img.icons8.com/nolan/64/chrome.png">
                    </p>
    
                    <p><small>chrome dev tools</small> </p>
    
                </div>
    
    
                <div class="col-md-2 col-sm-4">
    
                    <p>
                        <img src="https://img.icons8.com/color/64/000000/git.png">
                    </p>
    
                    <p><small>git</small> </p>
    
                </div>
    
                <div class="col-md-2 col-sm-4">
    
                    <p>
                        <img src="https://img.icons8.com/ios-filled/64/000000/mysql-logo.png">
                    </p>
    
                    <p><small>mysql workbench</small> </p>
    
                </div>
    
                <div class="col-md-2 col-sm-4">
    
                    <p>
                        <img src="https://img.icons8.com/color/64/000000/trello.png">
                    </p>
    
                    <p><small>trello</small> </p>
    
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
            { id: 3, nome: 'Yii2 Framework', stars: 5 },
            { id: 4, nome: 'Laravel Framework', stars: 5 },
            { id: 5, nome: 'HMTL', stars: 4 },
            { id: 6, nome: 'CSS', stars: 4 },
            { id: 7, nome: 'SASS', stars: 4 },
            { id: 8, nome: 'Java script', stars: 4 },
            { id: 9, nome: 'PHP', stars: 5 },
            { id: 10, nome: 'Python', stars: 3 },
            { id: 11, nome: 'Ionic', stars: 3 },
            { id: 12, nome: 'Git', stars: 5 },

        ],
    }),
    mounted() {

    },
    methods: {

    },
    computed: {

    }
}
</script>

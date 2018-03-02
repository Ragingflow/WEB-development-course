<template>
    <div id="search" class="row text-center">
        <div class="col-md-12 text-info" 
             v-if="res.state == 'no_search'"
             >
            {{message_default}}
        </div>
        <div class="col-md-12 text-info"
             v-if="res.books.totalItems == 0"
             >
            {{message}}
        </div>
        <div class="col-lg-4 col-md-6 cont" 
             v-else-if="res.state == 'success'" 
             v-for="item in res.books.items"
             >
            <div class="bord">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <img class="img-thumbnail" :src="item.volumeInfo.imageLinks.smallThumbnail" :alt="item.volumeInfo.title">
                    </div>
                    <div class="col-lg-6 col-md-6 info">
                        <h5>{{item.volumeInfo.title}}</h5>
                        <p>{{joinAuthors(item.volumeInfo.authors)}}</p>
                        <time>{{yearFormat(item.volumeInfo.publishedDate)}}</time>
                    </div>
                </div>
                <div class="row btn-cont">
                    <div class="col-lg-12 text-center ">
                        <button type="button" class="btn btn-success"
                                @click="$emit('onOrder', item)"    
                                >
                            Read more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'result',
        props: ["res"],
        data() {
            return {
                message_default: "You have not yet searched",
                message: "Nothing was found"
            }
        },
        methods: {
            yearFormat(year) {
                return year !== undefined ? year.split("-").reverse().join(".") : "-";
            },
            joinAuthors(authors) {
                return authors.join(", ");
            }
        }
    }
</script>

<style scoped>
    .cont{
        padding: 5px;
    }
    .bord{
        border: 3px solid #fd7e14;
        border-radius: 3px;
        background-color: #2e2e2e;
        box-sizing: border-box;
        color: #E8E8E8; 
        position: relative;
        height: 100%;
    }
    .bord .row:first-child{
        padding: 10px 0 50px 0;
    }
    .btn-cont{
        width: 60%;
        position: absolute;
        bottom: 5px;
        left: 25%
    }
</style>

<template>

    <div class="wrapper">
        <page-header />

        <div class="box title-box">
            <div class="photo-box">
                <p>Photo here</p>
            </div>
            <p>Recipe title goes here</p>
        </div>

        <div class="box ingredients-box">
            <div class="ingredients-inner-div">
                <h1 class=centred>Ingredients</h1>
                <ul>
                    <li>
                        Sexy tasty Caroline
                    </li>
                </ul>
            </div>
        </div>

        <div class="box tips-box">
            <div class="tips-inner-div">
                <h1 class=centred>Hot Tips</h1>
            </div>
        </div>
    </div>

</template>

<script>
import PageHeader from '@/components/Header'

export default {
    components: {
        PageHeader
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .panel-title {
        text-align: center;
        width: 100%;
        color: white;
        font-family: "Segoe UI";
        font-size: 24px;
    }

    .wrapper {
        display: grid;
        grid-template-columns: repeat(12, [col-start] 1fr);
        grid-template-rows: repeat(14, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 40px;
    }

    .box {
        border: 1px solid black;
    }

    .title-box {
        grid-column: 2/12;
        grid-row: 2/5;
    }

    .ingredients-box {
        grid-column: 2/6;
        grid-row: 5/11;
    }

    .tips-box {
        grid-column: 7/12;
        grid-row: 5/11;
        padding: 1px;
    }

    .ingredients-inner-div {
        /* border: 2px solid black; */
        height: 100%;
    }

    .tips-inner-div {
        height: 100%;
        margin-left: auto;
        margin-right: 0;
    }

    .centred {
        text-align: center;
    }

    .photo-box {
        border: 1px solid black;
        width: 30%;
    }

</style>

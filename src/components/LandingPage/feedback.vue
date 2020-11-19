<template>
    <div id="feedback">
        <div id="background">
            <b-container>
                <h2 class="h2_light">Обратная связь</h2>
                <form name="sentMessage" id="Form">
                    <b-row>
                        <b-col cols="4">
                            <label class="text_night" for="name">Ваше имя:</label>
                            <input v-model="feedbackData.userName" type="text" class="form-control" placeholder="Ваше имя" id="name" name="name" required="" data-validation-required-message="Пожалуйста, введите Ваше имя">
                            <label class="text_night" for="company">Ваша компания:</label>
                            <input type="text" class="form-control" placeholder="Название компании" id="name_company" name="mail" required="" data-validation-required-message="Пожалуйста, введите Название компании">
                            <label class="text_night" for="phone">Ваше телефон:</label>
                            <input type="tel" class="form-control" placeholder=" Номер телефона +7(xxx)xxx-xx-xx" pattern="+7\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}" id="phone" name="phone" required="" data-validation-required-message="Пожалуйста, введите Номер телефона">
                            <label class="text_night" for="mail">Ваш E-mail:</label>
                            <input type="email" class="form-control" placeholder="Ваш электронный адрес" id="mail" name="mail" required="" data-validation-required-message="Пожалуйста, введите Ваш электронный адрес">
                        </b-col>
                        <b-col>
                            <label class="text_night" for="message">Ваше сообщение:</label>
                            <textarea class="form-control" placeholder="Опишите ваш запрос" id="message" name="message" required="" data-validation-required-message="Пожалуйста, введите сообщение"></textarea>
                        </b-col>
                    </b-row>
                    <b-button type="submit" class="draw justify-content-center">Отправить сообщение</b-button>
                </form>
            </b-container>
        </div>
    </div>
</template>

<script>
    export default {
        name: "feedback",
        data(){
            return {
                feedbackData: {
                    userName: '',
                    userPhone: '',
                    userEmail: '',
                    userMessage: '',
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    #feedback{
        background: url("../../../public/images/background/mehanic.jpg") 100% 100%;
        background-size: 100% 100%;
        padding: 1% 0;
    }
    form{
        margin: 0 7%;
    }
    h2{
        color: white;
        text-align: center !important;
        text-shadow: 2px 2px 2px #1a3346;
    }
    input{
        padding: 15px 10px;
        min-height: 25px;
        margin-bottom: 1.5%;
    }
    label{
        color: white;
        font-family: "Open Sans",Arial,sans-serif;
        font-weight: 700 !important;
    }
    .form-control {
        border: 1px solid #1a3346 !important;
    }
    textarea{
        height: 90% !important;
    }
    p{
        margin-bottom: 0.5rem !important;
    }
    .col{
        padding-bottom: 0.5%;
    }
    .col-4{
        padding: 0 !important;
    }
    button{
        border: 2px solid white !important;
        font-weight: 700;
        color: #ffffff;
        border-radius: 7px;
        display: block;
        margin-top: 1% !important;
        margin-left: auto !important;
        margin-right: auto !important;
        font-size: 1rem;
        background: rgba(0, 0, 0, 0.9) !important;
        padding: 0.5% !important;
    }
    input:hover, textarea:hover{
        box-shadow: 7px 7px 7px #000000;
    }
    @media screen and (max-width: 500px) {
        input{
            padding: 17px 5px;
            min-height: 28px;
            height: 28px;
            margin-bottom: 0 ;
        }
        form{
            margin: 0;
        }
        label{
            margin-bottom: 0 !important;
        }
        .btn{
            margin-top: 2% !important;
            margin-bottom: 2% !important;
            font-size: 1rem;
        }
        .row{
            flex-direction: column;
            .col{
                padding: 0 !important;
            }
            .col-4{
                max-width: 100% !important;
            }
            textarea{
                height: 150px !important;
            }
        }
    }
    @media screen and (min-width: 500px) and (max-width: 768px) {
        input{
            padding: 17px 5px;
            margin-bottom: 0 ;
        }
        form{
            margin: 0;
        }
        label{
            margin-bottom: 0 !important;
        }
        .row{
            flex-direction: column;
            .col{
                padding: 0 !important;
            }
            .col-4{
                max-width: 100% !important;
            }
            textarea{
                height: 180px !important;
            }
        }
        .btn{
            margin-top: 2% !important;
            margin-bottom: 1% !important;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 992px) {
        input{
            padding: 20px 10px;
        }
        form{
            margin: 0;
        }
        .col-4 {
            flex: 0 0 40% !important;
            max-width: 40% !important;
        }
    }
    @media screen and (min-width: 992px) and (max-width: 1200px) {
        form{
            margin: 0;
        }
    }
</style>
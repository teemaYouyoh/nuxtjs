<template>
   <div class="feedback">
       <div class="feedback-header">
           <div class="feedback-wrap">
               <h3> <span>Обратная</span> связь</h3>
           </div>
           <form action="#" class="feedback-form" name="feedback-form">
               <input type="text" placeholder="Ваше имя">
               <input type="text" placeholder="Телефон">
               <input type="text" placeholder="Коментарий">
              <div class="feedback-agree">
                   <input type="radio" id="agreement">
                   <label for="agreement">Я согласен на обработку персональных данных</label>
              </div>
              <button class="feedback-send" type="submit">Отправить</button>
           </form>
       </div>
   </div>
</template>
<script>
</script>
<style lang="scss">
    .feedback {

        .feedback-wrap{
            background: #F2F9FF;
            padding: 20px;
        }
    }   
    .feedback-form{
        padding: 20px;
    }
    .feedback-header {
        h3{
            font-weight: 800;
            font-size: 48px;
            line-height: 120%;
            letter-spacing: -0.03em;
            color: #14142B;
             font-family: "Aver-Bold";
             max-width: 300px;
            span{
                color: #6544FB;
            }
        }
        input{
            display: inline-block;
            box-sizing: border-box;
            padding: 10px;
            width: 100%;
            border: none;
            border-bottom: 1px solid #BDBDBD;
            font-size: 16px;
            line-height: 15px;
            margin-bottom: 10px;
             font-family: "Geometria";
        }
         input::placeholder{
            color: #828282;
        }
    }
    .feedback-agree {
        display: flex;
        align-items: flex-start;
        margin: 20px 0px;
        label{
            font-size: 14px;
            line-height: 20px;
            color: #4F4F4F;
        }
    }
    .feedback-send {
         font-family: "Geometria";
         background: #6544FB;
         font-weight: 600;
        border-radius: 100px;
        font-size: 18px;
        line-height: 18px;
        text-align: center;
        color: #FFFFFF;
        border: none;
        padding: 15px 30px;
        box-sizing: border-box;
        width: 100%;
        &:hover{
           background: #7f62ff; 
           transition: all 0.3s;
        }
    }

</style>

<template>
    <div class="login">
      <div class="am-g myapp-login">
        <div class="myapp-login-logo-block  tpl-login-max">
          <div class="myapp-login-logo-text">
            <div class="myapp-login-logo-text">
              互联互加<span> 项目管理</span> <i class="am-icon-skyatlas"></i>

            </div>
          </div>

          <div class="login-font">
            <i>Log In </i>
            <!--or <span> Sign Up</span>-->
          </div>
          <div class="am-u-sm-10 login-am-center">
            <form class="am-form">
              <fieldset>
                <div class="am-form-group">
                  <input type="email" class="" id="doc-ipt-email-1" placeholder="输入账号">
                </div>
                <div class="am-form-group">
                  <input type="password" class="" id="doc-ipt-pwd-1" placeholder="输入密码" >
                </div>
                <p><button type="submit" class="am-btn am-btn-default">登录</button></p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data () {
            return {
              username:'',
              password:'',
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<script setup>
import { Login } from '@/js/DB/AccDB';
function login(){
    var id = document.getElementById("id").value;
    var pw = document.getElementById("pw").value;
    alert("id:"+id+"; pw:"+pw);
    const account = Login(id,pw);
}
</script>

<template>
    <div>
        <h4>Login Account</h4>
        <table>
            <tbody>
                <tr><td>Account ID</td><td>:</td><td><input type="text" placeholder="Please insert your member id" name="id" id="id"/></td></tr>
                <tr><td>Password</td><td>:</td><td><input type="password" name="pw" id="pw"/></td></tr>
                <tr><td colspan="3"><button @click="login()">Login</button></td></tr>
            </tbody>
        </table>
    </div>
</template>
<style>
button{
    margin-left: 50%;
    margin-right: 50%;
}
</style>
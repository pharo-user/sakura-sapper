
<style>

    div {
        background-color: #F6F4F4;
        padding: 8%;
    }

    div div {
        background-color: #F6F4F4;
        padding: 0 0;
        margin: 0 0;
    }

    /*:global(body){
                background: #F6F4F4;
    }*/

	h1 {
		color: black;
		font-family: 'Montserrat';
		font-weight: 'bold';
		font-size: 2em;
	}

	input {
      width: 80%;
      padding: 12px 20px;
      margin: 8px 0;
      border: none;
	}

	button {
	   font-family: 'Montserrat';
	   text-transform: uppercase;
       border: none;
       background-color: #5D2828;
       color: white;
       height: 50%;
       width: 86%;
       cursor: pointer;
       padding: 12px 20px;
       margin: 8px 0;
	}

    button:hover {
       background-color: #893838;
    }

     button:active {
       background-color: #5D2828;
     }

    .passwordField button {
        position: absolute;
        background-color: transparent;
        color: black;
        margin-left: -50px;
        height: 40px;
        width: 50px;
    }

</style>

<script>
  import Icon from 'svelte-awesome/components/Icon.svelte'
  import { eye } from 'svelte-awesome/icons';
  import {goto} from '@sapper/app';
  import { doLogin } from './_login';

  let email = '';
  let password = '';
  let pw_visible = false;

	async function login() {
        console.log('login');
        let r = await doLogin(email, password);
        console.log(r);
        if (r.status == 'success') {
            goto('./dashboard');
        } else {
            goto('./');
        }
	}

    function toggle() {
        pw_visible = !pw_visible;
        document.querySelector('#password').type = pw_visible ? 'text' : 'password';
    } 

    function dashboard() {
        goto('./dashboard');
    }
</script>



<svelte:head>
	<title>Login</title>
</svelte:head>
<br />
<br />
<div>
    <h1>CONNECT TO SAKURA.ECO</h1>
    <div>
        <input type="email" id="email" bind:value={email} placeholder="Email">
        <br />
        <div>
        <div class="passwordField">
            <input type="password" id="password" bind:value={password} placeholder="Password">
            <button on:click={toggle}><Icon data={eye} /></button>
        </div>
        </div>
        <br />
        <button on:click|once={login}>
            Sign In
        </button>
        <!--
        <button on:click={dashboard}>Dashboard</button>
         -->
    </div>
</div>

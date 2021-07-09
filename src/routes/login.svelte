
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

</style>

<script>
  import {goto} from '@sapper/app';
  import { doLogin } from './_login';
  import { doGetArticles } from './_login';

  let email = '';
  let password = '';

	async function login() {
        console.log('login');
        let r = await doLogin(email, password);
        console.log(r);
        if (r.status == 'success') {
            goto('/dashboard');
        } else {
            goto('/');
        }
	}
</script>



<svelte:head>
	<title>Login</title>
</svelte:head>
<br />
<br />
<h1>CONNECT TO SAKURA.ECO</h1>
<div>
    <div>
        <input bind:value={email} placeholder="Email">
        <br />
        <input bind:value={password} placeholder="Password">
        <br />
        <button on:click|once={login}>
            Sign In
        </button>

    </div>
</div>

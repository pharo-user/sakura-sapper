<script>
  import { doLogin } from './_login';
  import { onMount } from "svelte";
  
  let email = '';
  let password = '';

	function login() {
    console.log('login');
    let r = doLogin(email, password)
    console.log(r);
	}
</script>



<svelte:head>
	<title>About</title>
</svelte:head>

<h1>CONNECT TO SAKURA.ECO</h1>
<input bind:value={email} placeholder="enter your email">
<input bind:value={password} placeholder="enter your password">

<button on:click|once={login}>
	Sign In
</button>

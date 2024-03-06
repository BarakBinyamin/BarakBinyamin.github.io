<template>
	<div class="homepage">
		<div class="profile-container">
		<p class="bio">
			<!-- <img id="profile" src="/site-images/profile4.jpeg" class="profile"/> -->
			
			
			<div v-for="index in 5" id="profile"  :key="`/site-images/profile${index%5}.jpeg`"> 
				<!-- <Transition> -->
					<img class="profile" :src="`/site-images/profile${index%5}.jpeg`" v-show="index%5==img"/>
				<!-- </Transition> -->
			</div>

		
			<p class="bio">
				Hey there, I'm Barak Binyamin, an experienced software engineer with a passion for creating user-friendly tools and applications. Originally from Albany NY, I draw inspiration from my diverse background and experiences to inform my work.<br><br>

	With a degree in Computer Engineering and a minor in Mathematics, I have a solid foundation in technical skills and problem-solving. Whether it's building full-stack applications, working with embedded devices, or diving into FPGA projects, I thrive on the challenge of bringing ideas to life through code.<br><br>

	Outside of the tech world, you'll often find me exploring the great outdoors, especially hiking in the Adirondacks. I also enjoy whipping up delicious meals in the kitchen, playing the piano to unwind, and taking long walks to clear my mind.<br><br>

	In addition to my professional pursuits, I offer portfolio development services and provide both free and paid tutoring in Computer Engineering and Computer Science. I believe in fostering genuine connections and creating meaningful experiences, both in my work and personal life.

	I'm always open to new opportunities and collaborations, so don't hesitate to reach out if you have any questions or ideas you'd like to discuss. <a class='number' href="mailto:barak.binyamin585@gmail.com"> Let's connect </a>and create something amazing together!<br><br>
			</p>
		</p>

		</div>

 	<!-- Services -->
	<div id="Services" class="h1">Services</div>
	<div class="services-section">
		<div class="rates-info-session">
			<a class='number' href="mailto:barak.binyamin585@gmail.com?subject=This is a subject&body=This is body">Contact me</a> to setup a free info session up to 30 minutes
		</div>
		<div class="h2">Web Design</div>
		<div class="demos">
			<!-- <div class="iphone-container">
				<div class="iphone">
					<iframe width="100%" height="100%" src="https://caseybrigid.github.io/"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
					<div class="iphone-button-container">
						<div class="iphone-button"></div>
					</div>
				</div>
			</div> -->
			<div class="demo">
				<div class="examples">
					<div class="desktop">
						<img class="example-img" src="/site-images/demo1-desktop.png"/>
					</div>
					<div class="mobile">
						<div class="mobile-bubble-container">
							<div class="mobile-bubble"></div>
						</div>
						<img class="example-img" src="/site-images/demo1-mobile.png"/>
					</div>
				</div>
				<div class="description">
					Modeling Portfolio
				</div>
			</div>
			<div v-if="false" class="demo">
				<div class="examples">
					<div class="desktop">
						<img class="example-img" src="/site-images/demo1-desktop.png"/>
					</div>
					<div class="mobile">
						<div class="mobile-bubble-container">
							<div class="mobile-bubble"></div>
						</div>
						<img class="example-img" src="/site-images/demo1-mobile.png"/>
					</div>
				</div>
				<div class="description">
					Photography Portfolio
				</div>
			</div>
		</div>
	<div class="rates">
		<p>
			Pricing:<br><br>     
			&nbsp;&nbsp;New Design and GitHub setup  <br>               
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$250<br><br>
			&nbsp;&nbsp;From existing design          <br>         
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$25<br><br>     
			&nbsp;&nbsp;Custom hostname setup  (ex. www.sarahsportfolio.com)  <br>     
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$5 + cost of hostname(~$12/year)<br><br>     
			&nbsp;&nbsp;Simple updates like adding/removing pictures <br>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$10/time<br><br>     
			</p></div>
	</div>

	<div class="h2">Consulting & Tutoring</div>
	<div class="tutoring"> 
		Computer Engineering<br>
		Embedded Engineering<br>
		Full Stack Applications<br>
		Computer Science<br>
		Web Design<br>
		AI Tooling<br>
	</div>
	<div class="rates">
			<p>
				Tutoring            <br>         
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$20/hour<br><br>     
				Consulting     <br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$40/hour<br><br>     
				
				</p>
		</div>

	<!-- Blog -->
	<!-- <div id="Blog"     class="h1">Blog</div>
	<div class="blog">Coming soon...</div>	
 -->

	<!--  Contact -->
	<div id="Contact" class="h1 contact">Contact</div>
	<div id="Contact"  class="contact-section">
		<div class="contact-emoji">
			<a target="_blank" href="https://github.com/BarakBinyamin" >
           		<svg class="github" viewBox="0 -3.5 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" fill="black"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="black"> <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"></path> <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"></path> </g> </g></svg>
        	</a>
		</div>
		<div class="contact-emoji">
			<a target="_blank" href="https://www.linkedin.com/in/Barak-Binyamin" >
         		<svg class="linkedin" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="2" y="2" width="28" height="28" rx="14" fill="black"></rect> <path d="M12.6186 9.69215C12.6186 10.6267 11.8085 11.3843 10.8093 11.3843C9.81004 11.3843 9 10.6267 9 9.69215C9 8.7576 9.81004 8 10.8093 8C11.8085 8 12.6186 8.7576 12.6186 9.69215Z" fill="#2A372D"></path> <path d="M9.24742 12.6281H12.3402V22H9.24742V12.6281Z" fill="#2A372D"></path> <path d="M17.3196 12.6281H14.2268V22H17.3196C17.3196 22 17.3196 19.0496 17.3196 17.2049C17.3196 16.0976 17.6977 14.9855 19.2062 14.9855C20.911 14.9855 20.9008 16.4345 20.8928 17.5571C20.8824 19.0244 20.9072 20.5219 20.9072 22H24V17.0537C23.9738 13.8954 23.1508 12.4401 20.4433 12.4401C18.8354 12.4401 17.8387 13.1701 17.3196 13.8305V12.6281Z" fill="#2A372D"></path> </g></svg>        
			</a>
		</div>
  
		<div class="contact-emoji">     
			<a class='mail' href="mailto:barak.binyamin585@gmail.com">
				<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
					<path d="M 5.5 7 C 3.019531 7 1 9.019531 1 11.5 L 1 11.925781 L 25 29 L 49 11.925781 L 49 11.5 C 49 9.019531 46.980469 7 44.5 7 Z M 6.351563 9 L 43.644531 9 L 25 22 Z M 1 14.027344 L 1 38.5 C 1 40.980469 3.019531 43 5.5 43 L 44.5 43 C 46.980469 43 49 40.980469 49 38.5 L 49 14.027344 L 43 18.296875 L 43 41 L 7 41 L 7 18.296875 Z"></path>
				</svg>
			</a>
		</div>
		<div class="space"></div>
	</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			img : 4
		}
	},
	created(){
		// setInterval(()=>{this.img = (this.img + 1) % 5;console.log(this.img)},5000)
	}
}
</script>
<style scoped>
.homepage{
	width: 100%;
	overflow: hidden;
}
.profile-container{
	padding: 20px;
	width: 100%;
	height: 100%;
	overflow: hidden;
	margin-bottom: 20px;
	background-color: var(--second-bg-color);
	color           : var(--second-font-color);
	/* border-radius: 0px 0px 10px 10px; */
}
.bio{
	width         : 100%;
	padding-left  : 20px;
	padding-right : 20px;
	text-align    : left;
}
.profile{
	margin-top    : 10px;
	width         : 300px;
	height        : 400px;
	/* margin-right : 5px; */
	border-radius : 5px;
	/* margin-left: calc(50% - 300px/2);
	margin-right : 0px; */
	float         : left;
	margin-right  : 20px;
	margin-bottom : 20px;
	/* -webkit-transition: all 1s ease-in-out;
  	-moz-transition   : all 1s ease-in-out;
  	transition        : all 1s ease-in-out; */
	/* z-index           : 5;
	background-repeat : no-repeat;
  	background-size   :   300px 400px; */
	object-fit        : cover;
}

.profile-container{
	margin-top: 0px;
}
.v-enter-active, .v-leave-active {
   transition: all .8s ease-in-out;
   /* transform:translateX(0); */
  }
.v-enter-from, .v-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity  : 0;
	position: absolute;
	left    :40px;
}

.banner{
	background-color: var(--second-bg-color);
	width           : 100%;
	height          : 85px;
	display         : block;
	margin-bottom   : 40px;
}

.services-section{
	width       : 100%;
	padding     : 0px 0px 0px 00px;
}
/* .iphone-container{
	width          : 100%;
	display        : grid;
	justify-items  : center;
}
.iphone{
	width: min(80%,445px);
	height: min(800px, 60vh);
	border-radius: 20px ;
	border: 20px solid var(--second-bg-color);
	overflow: hidden;
}
.iphone-button-container{
	position  : relative;
	display   : grid;
	width     : 100%;
	margin-top: -55px;
	justify-content: center;
	background-color: whitesmoke;
	border-bottom: 2px solid white;;
	z-index: 5;
}
.iphone-button{
	width: 50px;
	height: 50px;
	background-color: var(--second-bg-color);
	border-radius: 100%;
} */
.demos{
	display              : grid;
	grid-template-columns: repeat(auto-fit, 350px);
	height               : max-content;
	overflow             : hidden;
	grid-gap             : 25px;
	align-items          : center;
	justify-content      : center;
	padding              : 20px;
}
.demo{
	height            : 226px;
	background-color  : whitesmoke;
	border-radius     : 10px;
	display           : grid;
	grid-template-rows: 75% 25%;
	overflow          : hidden;
	box-shadow        : 0px 2px 8px 0px black;
}
.demo:hover{
	box-shadow        : 0px 4px 12px 0px black;
	cursor : pointer;
}
.examples{
	display              : grid;
	width                : 100%;
	grid-template-columns: calc(75% - 8px) calc(25% + 8px);
}
.desktop{
	background-color: blue;
}
.mobile{
	position        : relative;
	border-radius   : 10px;
	border-left     : 6px solid black;
	border-right    : 6px solid black;
	border-top      : 6px solid black;
	border-bottom   : 8px solid black;
	height          : calc(100% - 6px*2 - 5px);
	overflow        : hidden;
	margin-top      : 5px;
	margin-left     : 4px;
	margin-right    : 4px;
}
.mobile-bubble-container{
	position        : absolute;
	width           : 100%;
	display         : grid;
	justify-items   : center;

}
.mobile-bubble{
	background-color: black;
	width           : 50px;
	height          : 5px;
	border-radius   : 0px 0px 10px 10px;
}
.description{
	display: grid;
	text-align      : center;
	align-items     : center;
	background-color: var(--second-bg-color);
	color           : var(--second-font-color);
}
.example-img{
	width: 100%;
}

.rates{
	font-family: var(--second-font-family);
	display: grid;
	justify-items: left;
	padding: 40px;
}

.rates-info-session{
	font-family: var(--second-font-family);
	padding: 0px 15px 10px 25px;
}



.tutoring{
	padding-left:45px;
}
.blog{
	width      : 100%;
	display    : grid;
	padding    : 20px;
}



.contact{
	margin-top    : 50px;
	padding-top   : 50px;
	padding-bottom: 25px;
	text-align:center;
	background-color: var(--second-bg-color);
	color: var(--second-font-color);
	border-radius: 10px 10px 0px 0px;
	box-shadow: 0px 0px 0px 2px var(--second-bg-color);
}
.contact-section{
	width                : 100%;
	display              : grid;
	grid-template-columns: repeat(3, min-content);
	align-items          : center;
	justify-content      : center;
	grid-column-gap      : 30px;
	/* padding-left         : 20px; */
	background-color: var(--second-bg-color);
	border-bottom: 2px solid var(--second-bg-color) ;
	padding: 20px;
	padding-bottom:100px;
}
.contact-emoji{
	width: max-content;
}
.contact-emoji:hover{
	opacity: .6;
}
.mail{
	display : inline-block;
    padding : 5px;
    width   : calc(39px * 2);
    height  : calc(39px * 2);
}
.github{
    display : inline-block;
    padding : 5px;
    width   : calc(36px * 2);
    height  : calc(36px * 2);
}
.linkedin{
    display   : inline-block;
    margin-top: 3px;
    width     : calc(35px * 2);
    height    : calc(35px * 2);
}


.h1{
	font-size   : var(--h1-font-size);
	font-weight : bold;
	padding     : 10px;
}
.h2{
	font-size   : var(--h2-font-size);
	font-weight : bold;
	padding     : 0px 0px 10px 25px;
}
.space{
	height: 0px;
}
</style>
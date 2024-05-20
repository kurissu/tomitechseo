// import React from 'react'

// const testMap = () => {
//   return (
//     <div>
//         <div class="section map">
// 				<div class="map-container">
// 					<div class="map-container-title fade-in">
// 						<p class="map-container-title-section">
// 							<span class="dash"></span>Studio</p>
// 						<h1 class="map-container-title-text">Map</h1>
// 					</div>
// 					<div class="map-container-list fade-in waiting">
// 						<ul class="map-container-list-container">
// 							<li class="label-list">
// 								<label class="map-container-list-container-label" for="toggle-card-3" alt="Art">Art</label>
// 							</li>
// 							<li class="label-list">
// 								<label class="map-container-list-container-label" for="toggle-card-2" alt="Marketing">Marketing</label>
// 							</li>
// 							<li class="label-list">
// 								<label class="map-container-list-container-label" for="toggle-card-2" alt="Marketing">Web</label>
// 							</li>
// 							<li class="label-list">
// 								<label class="map-container-list-container-label" for="toggle-card-2" alt="HR">Admin</label>
// 							</li>
// 							<li class="label-list">
// 								<label class="map-container-list-container-label" for="toggle-card-2" alt="Production">Producing</label>
// 							</li>
// 							<li class="label-list">
// 								<label class="map-container-list-container-label" for="toggle-card-3" alt="Programming">Programming</label>
// 							</li>
// 							<li class="label-list">
// 								<label class="map-container-list-container-label" for="toggle-card-2" alt="Game design">Game design</label>
// 							</li>
// 							<li class="label-list">
// 								<label class="map-container-list-container-label" for="toggle-card-1" alt="Audio">Audio</label>
// 							</li>
// 							<li class="label-list">
// 								<label class="map-container-list-container-label" for="toggle-card-3" alt="Streaming Room">Streaming Room</label>
// 							</li>
// 							<li class="label-list">
// 								<label class="map-container-list-container-label" for="toggle-card-1" alt="Darts">Darts</label>
// 							</li>
// 							<li class="label-list">
// 								<label class="map-container-list-container-label" for="toggle-card-1" alt="Consoles">Consoles</label>
// 							</li>
// 							<li class="label-list">
// 								<label class="map-container-list-container-label" for="toggle-card-1" alt="Kitchen">Kitchen</label>
// 							</li>
// 							<li class="label-list">
// 								<label class="map-container-list-container-label" for="toggle-card-1" alt="RoofTopTerrace">Rooftop Terrace</label>
// 							</li>
// 						</ul>
// 					</div>
// 					<div class="map-navigation fade-in waiting-long">
// 						<div class="map-navigation-lift">
// 							<svg class="map-navigation-lift-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 244">
// 								<path class="map-navigation-lift-svg-path" id="line_1_" d="M27.5 0h5v244h-5z"></path>
// 								<g class="map-navigation-lift-svg-g" id="lift_1_">
// 									<path class="map-navigation-lift-svg-path" id="arrow-top_1_" d="M77.5 22.5c-.8 0-1.6.4-2.1 1.1l-10 15c-.5.8-.6 1.8-.1 2.6s1.3 1.3 2.2 1.3h20c.9 0 1.8-.5 2.2-1.3s.4-1.8-.1-2.6l-10-15c-.5-.7-1.3-1.1-2.1-1.1zm-5.3 15l5.3-8 5.3 8H72.2z"></path>
// 									<path class="map-navigation-lift-svg-path" id="arrow-bottom_1_" d="M87.5 47.5h-20c-.9 0-1.8.5-2.2 1.3s-.4 1.8.1 2.6l10 15c.5.7 1.2 1.1 2.1 1.1s1.6-.4 2.1-1.1l10-15c.5-.8.6-1.8.1-2.6s-1.3-1.3-2.2-1.3zm-10 13l-5.3-8h10.7l-5.4 8z"></path>
// 									<path class="map-navigation-lift-svg-path" id="lift-all_1_" d="M2.5 90h55c1.4 0 2.5-1.1 2.5-2.5v-85C60 1.1 58.9 0 57.5 0h-55C1.1 0 0 1.1 0 2.5v85C0 88.9 1.1 90 2.5 90zm30-85H55v80H32.5V5zM5 5h22.5v80H5V5z"></path>
// 								</g>
// 							</svg>
// 						</div>
// 						<ul id="map">
// 							<li>
// 								<label for="toggle-card-1" class="floor stfloor active">Rooftop</label>
// 							</li>
// 							<li>
// 								<label for="toggle-card-2" class="floor ndfloor">Second floor</label>
// 							</li>
// 							<li>
// 								<label for="toggle-card-3" class="floor thrdfloor">First floor</label>
// 							</li>
// 						</ul>
// 					</div>
// 				</div>
// 				<div class="map-content">
// 					<input type="radio" name="cards" class="card-checkbox" id="toggle-card-1" value="1" checked="">
// 					<div class="card card1">
// 						<img class="card-img" src="assets/images/maps/plan8.png" alt="Rooftop of the studio" usemap="#studio-map">
// 						<map name="studio-map" id="studio-map">
// 							<area target="" alt="RoofTopTerrace" title="RoofTopTerrace" href="#" coords="176,546,203,629,1056,346,1028,264" shape="poly">
// 							<area target="" alt="Audio" title="Audio" href="#" coords="305,231,338,335,399,315,363,213" shape="poly">
// 							<area target="" alt="Darts" title="Darts" href="#" coords="671,109,684,143,763,116,755,82,712,95,693,103,683,106,678,108" shape="poly">
// 							<area target="" alt="Consoles" title="Consoles" href="#" coords="706,139,804,108,826,215,749,234,735,190,721,194,713,165,711,151" shape="poly">
// 							<area target="" alt="Kitchen" title="Kitchen" href="#" coords="828,213,842,315,1026,259,943,15,800,67" shape="poly">
// 						</map>
// 						<div class="popup-item" id="RoofTopTerrace">
// 							<div class="popup-item-img">
// 								<img class="popup-item-img-content" data-src="assets/images/maps/rooftop.jpg" alt="A beautiful rooftop view of Southeastern Paris">
// 							</div>
// 							<div class="popup-item-wording">
// 								<div class="popup-cross">
// 									<icon class="icon-cross"></icon>
// 								</div>
// 								<h2 class="popup-item-wording-title">Rooftop</h2>
// 								<p class="popup-item-wording-description">A beautiful rooftop view of Southeastern Paris. Perfect for gazing off into the sunset with a cold drink after a satisfying day of making games.</p>
// 							</div>
// 						</div>
// 						<div class="popup-item" id="Audio">
// 							<div class="popup-item-img">
// 								<img class="popup-item-img-content" data-src="assets/images/maps/soundesign.jpg" alt="The place where our immersive soundtracks are made">
// 							</div>
// 							<div class="popup-item-wording">
// 								<div class="popup-cross">
// 									<icon class="icon-cross"></icon>
// 								</div>
// 								<h2 class="popup-item-wording-title">Sound Design</h2>
// 								<p class="popup-item-wording-description">Immersive soundtracks and SFX are essential to produce great games, and our Sound Designers do a great job translating our vision into music.</p>
// 							</div>
// 						</div>
// 						<div class="popup-item" id="Consoles">
// 							<div class="popup-item-img">
// 								<img class="popup-item-img-content" data-src="assets/images/maps/console.jpg" alt="Consoles room">
// 							</div>
// 							<div class="popup-item-wording">
// 								<div class="popup-cross">
// 									<icon class="icon-cross"></icon>
// 								</div>
// 								<h2 class="popup-item-wording-title">Consoles</h2>
// 								<p class="popup-item-wording-description">What would a video game studio look like without a proper gaming area? We’ve arranged a dedicated space to allow our employees to play on several platforms, ranging from retro gaming to the latest consoles.
// 								</p>
// 							</div>
// 						</div>
// 						<div class="popup-item" id="Darts">
// 							<div class="popup-item-img">
// 								<img class="popup-item-img-content" data-src="assets/images/maps/darts.jpg" alt="Darts room">
// 							</div>
// 							<div class="popup-item-wording">
// 								<div class="popup-cross">
// 									<icon class="icon-cross"></icon>
// 								</div>
// 								<h2 class="popup-item-wording-title">Darts</h2>
// 								<p class="popup-item-wording-description">Your accuracy will be put to the test in this ultimate test of skills. You won't be judged on your first try though, even if you hit a colleague by mistake.</p>
// 							</div>
// 						</div>
// 						<div class="popup-item" id="Kitchen">
// 							<div class="popup-item-img">
// 								<img class="popup-item-img-content" data-src="assets/images/maps/kitchen.jpg" alt="A bunch of co-workers seat at the table in the kitchen">
// 							</div>
// 							<div class="popup-item-wording">
// 								<div class="popup-cross">
// 									<icon class="icon-cross"></icon>
// 								</div>
// 								<h2 class="popup-item-wording-title">Kitchen</h2>
// 								<p class="popup-item-wording-description">Whether you want to grab a cup of coffee, cook your lunch, or hang with your teammates around a snack break, this is the central area where the Amplidudes &amp; Amplidudettes draw their strength from.</p>
// 							</div>
// 						</div>
// 					</div>
// 					<input type="radio" name="cards" class="card-checkbox" id="toggle-card-2" value="2">
// 					<div class="card">
// 						<img class="card-img" src="assets/images/maps/plan7.png" alt="second floor of the studio" usemap="#studio-map2">
// 						<map name="studio-map2" id="studio-map">
// 							<area target="" alt="Marketing" title="Marketing" href="#" coords="157,485,341,432,389,570,204,632,177,552" shape="poly">
// 							<area target="" alt="HR" title="HR" href="#" coords="411,458,443,552,754,450,719,362" shape="poly">
// 							<area target="" alt="GameDesign" title="Game Design" href="#" coords="757,295,801,439,952,383,903,246" shape="poly">
// 							<area target="" alt="Production" title="Production" href="#" coords="856,159,871,247,917,235,929,257,1016,222,981,116" shape="poly">
// 						</map>
// 						<div class="popup-item" id="Marketing">
// 							<div class="popup-item-img">
// 								<img class="popup-item-img-content" data-src="assets/images/maps/marketing.jpg" alt="The Marketing team of Amplitude Studios in one of our meeting room">
// 							</div>
// 							<div class="popup-item-wording">
// 								<div class="popup-cross">
// 									<icon class="icon-cross"></icon>
// 								</div>
// 								<h2 class="popup-item-wording-title">Marketing &amp; Web</h2>
// 								<p class="popup-item-wording-description">Developing video games is one thing, but selling them is another. This is where the Marketing &amp; Web team comes into play. They are in charge of all of the studio’s communication, relationship with our community, asset creation and events!</p>
// 							</div>
// 						</div>
// 						<div class="popup-item" id="HR">
// 							<div class="popup-item-img">
// 								<img class="popup-item-img-content" data-src="assets/images/maps/hr.jpg" alt="The Human resources team of Amplitude Studios at work">
// 							</div>
// 							<div class="popup-item-wording">
// 								<div class="popup-cross">
// 									<icon class="icon-cross"></icon>
// 								</div>
// 								<h2 class="popup-item-wording-title">Human resources</h2>
// 								<p class="popup-item-wording-description">Positioned in the midst of the open space, our HR &amp; executive teams handle the studio’s strategy and general management.</p>
// 							</div>
// 						</div>
// 						<div class="popup-item" id="GameDesign">
// 							<div class="popup-item-img">
// 								<img class="popup-item-img-content" data-src="assets/images/maps/gamedesign.jpg" alt="Our Game designer team watching a strategic board">
// 							</div>
// 							<div class="popup-item-wording">
// 								<div class="popup-cross">
// 									<icon class="icon-cross"></icon>
// 								</div>
// 								<h2 class="popup-item-wording-title">Game Design</h2>
// 								<p class="popup-item-wording-description">Our game designers focus on defining all the elements of a game and its core mechanics. Once the best ingredients and optimal recipe have been validated, they hand it over to the rest of the dev team to put that vision into art or code.</p>
// 							</div>
// 						</div>
// 						<div class="popup-item" id="Production">
// 							<div class="popup-item-img">
// 								<img class="popup-item-img-content" data-src="assets/images/maps/producer.jpg" alt="Daily meeting of our production team">
// 							</div>
// 							<div class="popup-item-wording">
// 								<div class="popup-cross">
// 									<icon class="icon-cross"></icon>
// 								</div>
// 								<h2 class="popup-item-wording-title">Production</h2>
// 								<p class="popup-item-wording-description">Also known as the "People who get things done", producers manage the production schedule, budget, development team &amp; QA. It is thanks to them that our games are made on time and within budget.</p>
// 							</div>
// 						</div>
// 					</div>
// 					<input type="radio" name="cards" class="card-checkbox" id="toggle-card-3" value="3">
// 					<div class="card">
// 						<img class="card-img" src="assets/images/maps/plan2.png" alt="first floor of the studio" usemap="#studio-map3">
// 						<map name="studio-map3" id="studio-map">
// 							<area target="" alt="Programming" title="Programming" href="#" coords="146,456,296,406,359,585,204,636" shape="poly">
// 							<area target="" alt="Art" title="Art" href="#" coords="430,402,761,296,814,431,470,547" shape="poly">
// 							<area target="" alt="Basket" title="Basket" href="#" coords="902,308,934,390,1058,352,1033,272" shape="poly">
// 							<area target="" alt="StreamingRoom" title="StreamingRoom" href="#" coords="826,59,879,214,999,172,949,19" shape="poly">
// 						</map>
// 						<div class="popup-item" id="Programming">
// 							<div class="popup-item-img">
// 								<img class="popup-item-img-content" data-src="assets/images/maps/prog.jpg" alt="Programming">
// 							</div>
// 							<div class="popup-item-wording">
// 								<div class="popup-cross">
// 									<icon class="icon-cross"></icon>
// 								</div>
// 								<h2 class="popup-item-wording-title">Programming</h2>
// 								<p>A game is only as good as its code. These guys &amp; gals know how to bring our art and design to life. Plus, their screens look like the Matrix!</p>
// 							</div>
// 						</div>
// 						<div class="popup-item" id="Art">
// 							<div class="popup-item-img">
// 								<img class="popup-item-img-content" data-src="assets/images/maps/art.jpg" alt="Art">
// 							</div>
// 							<div class="popup-item-wording">
// 								<div class="popup-cross">
// 									<icon class="icon-cross"></icon>
// 								</div>
// 								<h2 class="popup-item-wording-title">Art</h2>
// 								<p>If you are wondering where all of our stunning visuals &amp; 3D graphics come from, look no further! Our talented artists are dedicated to bringing to life the different universes we create, and they do it very well!</p>
// 							</div>
// 						</div>
// 						<div class="popup-item" id="Basket">
// 							<div class="popup-item-img">
// 								<img class="popup-item-img-content" data-src="assets/images/maps/basket.jpg" alt="Basket ball">
// 							</div>
// 							<div class="popup-item-wording">
// 								<div class="popup-cross">
// 									<icon class="icon-cross"></icon>
// 								</div>
// 								<h2 class="popup-item-wording-title">Basket Ball Arcade</h2>
// 								<p>For those who have a gentle - but firm - hand and want to experience a short moment of NBA glory, this is the ideal training spot. Competition is fierce to get a place on the leaderboard!</p>
// 							</div>
// 						</div>
// 						<div class="popup-item" id="StreamingRoom">
// 							<div class="popup-item-img">
// 								<img class="popup-item-img-content" data-src="assets/images/maps/streamingroom.jpg" alt="Streaming Room">
// 							</div>
// 							<div class="popup-item-wording">
// 								<div class="popup-cross">
// 									<icon class="icon-cross"></icon>
// 								</div>
// 								<h2 class="popup-item-wording-title">Streaming Room</h2>
// 								<p>We often want to share fun moments with our community, so we designed a cozy streaming room to this effect. Come and join us at
// 									<a href="http://twitch.tv/amplitudestudios" target="_blank" rel="noopener" title="link to amplitude studios twitch chanel">twitch/amplitudestudios</a>!</p>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
//     </div>
//   )
// }

// export default testMap
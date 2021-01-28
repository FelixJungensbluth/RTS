<!DOCTYPE html>
<html>
<head>
    <title>Tolles RTS Game</title>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <script src="https://cdn.jsdelivr.net/npm/phaser@3.15.1/dist/phaser-arcade-physics.min.js"></script>
    <link rel="stylesheet" type="text/css" href="styles.css" />
    <link href="https://fonts.googleapis.com/css2?family=Teko&display=swap" rel="stylesheet">
    
</head>
<body>

 
    <header>
        <div class="profile--container">
            <div class="profile--overlay--container">
                <div class="profile--overlay--close">
                    <div class="close--line1"></div>
                    <div class="close--line2"></div>
                </div>
            </div>
            <div class="profile--overlay--background"></div>
        </div>
        

        <div class= nav--container>
            <nav>
                <a href="index.php"><span class="temp--logo">RTS<span class="logocolor">Game</span></span></a>
                    <ul class="nav--links">
                        <li class="drop--list--item">
                            <div class="gameinfo--dropdown--container"><button class="nav--buttons dropDownButton" href="#">Spielinfo</button>
                                <div class="gameinfo--dropdown--content">
                                    <ul class="dropdown">
                                       <li> <a class="dropdown--content btn">Link 1</a><br></li><br>
                                       <li> <a class="dropdown--content btn">Link 2</a><br></li><br>
                                       <li> <a class="dropdown--content btn">Link 3</a><br></li><br>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li><a class="nav--buttons" href="#">Medien</a></li>
                        <li class="drop--list--item">
                            <div class="gameinfo--dropdown--container"><button class="nav--buttons dropDownButton" href="#">Neuigkeiten</button>
                                <div class="gameinfo--dropdown--content">
                                    <ul class="dropdown">
                                       <li> <a class="dropdown--content btn">Link 1</a><br></li><br>
                                       <li> <a class="dropdown--content btn">Link 2</a><br></li><br>
                                       <li> <a class="dropdown--content btn">Link 3</a><br></li><br>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li><a class="nav--buttons" href="#">Über</a></li>

                    </ul>
                    <div class="account--management--container">
                        <div class="profile--button--container"><div  class="profile--button btn"><img src="resources/profile.png" class="profile--icon"></img><span class="profile--button--text">Profil</span></div></div>
                        <div class="play--now--button--container"><a href="playnow.php" class="play--now--button btn">Jetzt spielen</a></div>
                        <div class="register--button--container"><a href="register.php"class="register--button btn">Registrieren</a></div>
                    </div>
                    <div class="burger">
                        <div class="line1"></div>
                        <div class="line2"></div>
                        <div class="line3"></div>
                    </div>
                    
            </nav>
            <script src="nav.js"></script>
        </div>
    </header>
    <div class="index--banner--container">
        <div class="gameHeadlineContainer">
            <span class="gameHeadline">RTSGAME</span>
        </div>
        <div class="gameHeadlineTextContainer">
            <span class="gameHeadlineText">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</span>
        </div>
    </div>
    <div class="index--3--flex--container">
        <div class="index--flex--content">
            <div class="icon--container"><img src="resources/juwel.png" class="index--icon icon1"></img></div><br>
            <div class="text--container">   
                <span class="sub-headline">Besetze<br>Rohstoffvorkommen</span><br>
                <span class="normal-text">Lorem ipsum dolor sit amet.<br>Tanem sunt elorem generes.</span>
            </div> 
        </div>
        <div class="index--flex--content">
            <div class="icon--container"><img src="resources/globus.png" class="index--icon icon1"></img></div><br>
            <div class="text--container">    
                <span class="sub-headline">Spiele Online<br>gegen deine Freunde</span><br>
                <span class="normal-text">Lorem ipsum dolor sit amet.<br>Tanem sunt elorem generes.</span>
            </div>
        </div>
        <div class="index--flex--content">
            <div class="icon--container"><img src="resources/gewinner.png" class="index--icon icon1"></img></div><br>
            <div class="text--container">    
                <span class="sub-headline">Führe deine<br>Armee zum Sieg</span><br>
                <span class="normal-text">Lorem ipsum dolor sit amet.<br>Tanem sunt elorem generes.</span>
            </div>
        </div>
    </div>
    <div class="index--flex--container image--left">
        <div class="flex--image--container"></div>
        <div class="flex--text--container">
            <div class="index--text--container">
                <span class="flex--text--headline">Lorem ipsum<br>dolor sit</span><br>
                <span class="flex--text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</span>
            </div>
        </div>
    </div>
    <div class="index--flex--container image--right">
        <div class="flex--image--container"></div>
        <div class="flex--text--container">
            <div class="index--text--container">
            <span class="flex--text--headline">Lorem ipsum<br>dolor sit</span><br>
                <span class="flex--text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</span>
            </div>
        </div>
    </div>
    <div class="index--flex--container image--left">
        <div class="flex--image--container"></div>
        <div class="flex--text--container">
            <div class="index--text--container">
            <span class="flex--text--headline">Lorem ipsum<br>dolor sit</span><br>
                <span class="flex--text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</span>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="footer--content"><a target="_blank" href="https://www.instagram.com/">INSTAGRAM</a></div>
        <div class="footer--content"><a target="_blank" href="https://de-de.facebook.com/">FACEBOOK</a></div>
        <div class="footer--content"><a target="_blank"  href="https://twitter.com/?lang=de">TWITTER</a></div>
        <div class="footer--content"><a target="_blank" href="https://www.youtube.com/">YOUTUBE</a></div>
        <div class="footer--content"><a target="_blank" href="https://dribbble.com/julesforrest">IMPRESSUM</a></div>
        
    </div>
    <script src="profile.js"></script>
</body>
</html>
<!DOCTYPE html>
<html>
<head>
    <title>Tolles RTS Game</title>
    <meta charset="utf-8"/>
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
        </div>
    </header>
        <div class="play--now--container">
            <div class="play--now--formular--container">
                <div class="play--now--formular--headline">
                    <span class="formular--headline">Anmeldung</span>
                </div>
               
                <form class="form">
                    
                   
                    <div class="form--row">
                    
                        <label>Email</label>
                            
                                <input name="email" tabindex="1" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" class="form-control" placeholder="Email" >
                   
                    </div>
    
                     
                    <div class="form--row">
                    
                        <label>Passwort</label>
                            
                                <input name="password" tabindex="2" type="password" class="form-control" placeholder="Passwort" ><br>
                                <div class="no--account--container"><span class="no--account">Du hast noch kein Konto erstellt? <a href="register.php">Klicke hier </a> um dich zu registrieren.</span></div>
                    </div>

                   
                            <button type="submit" class="btn submit--btn">Bestätigen</button>
                </form> 
               
            </div>
        </div>
    
</body>
</html>
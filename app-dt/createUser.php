<?php
    header("Access-Control-Allow-Origin: *");

    require_once 'cnx.php';

    if(isset($_POST['mail'])) {
        $sql = "INSERT INTO user (mail, name, surname, pseudo, password) 
                VALUES (?, ?, ?, ?, ?)";
                $request = $pdo->prepare($sql);
                $request->bindParam(1, $_POST['mail']);
                $request->bindParam(2, $_POST['name']);
                $request->bindParam(3, $_POST['surname']);
                $request->bindParam(4, $_POST['pseudo']);
                $request->bindParam(5, $_POST['password']);
                echo $request->execute();
    }else{
        echo -1;
    }

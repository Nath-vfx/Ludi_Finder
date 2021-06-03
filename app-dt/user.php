<?php

// Appel la classe Game_Category
require_once 'classes/User.php';

//Création d'un objet PDO
require_once 'cnx.php';

// ordre SQL
$query = "SELECT * FROM `user`";


$request = $pdo->prepare($query);

$listUsers = array();

if($request->execute()) {
    while ($data = $request->fetch()) {
        $user = new user(
            $data['user_id'],
            $data['mail'],
            $data['name'],
            $data['surname'],
            $data['pseudo'],
            $data['password'],
            $data['bio'],
            $data['profil_img']
        );

        $listUsers[] = $user;
    }
    header('Content-Type: application/json');
    echo json_encode($listUsers);
}else{
    echo "Request error";
}

/*    echo "<pre>";
    print_r($listUsers);
    echo "</pre>";*/

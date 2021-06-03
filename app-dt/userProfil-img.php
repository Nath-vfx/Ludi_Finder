<?php

// Appel la classe Game_Category
require_once 'classes/User.php';
require_once 'classes/image_profil.php';

//Création d'un objet PDO
require_once 'cnx.php';

// ordre SQL
$query = "SELECT * 
                FROM user,image_profil
                WHERE user.profil_img = image_profil.img_id
                ORDER BY user.name";


$request = $pdo->prepare($query);

$listUser = array();
$listImage_profil = array();

if($request->execute()) {
    while ($data = $request->fetch()) {
        $user = new user(
            $data['user_id'],
            $data['name'],
            $data['surname'],
            $data['pseudo'],
            $data['password'],
            $data['bio'],
            $data['profil_img']
        );

        $image_profil = new image_profil(
            $data['img_id'],
            $data['img_nom'],
            $data['img_taille'],
            $data['img_type'],
            $data['img_desc'],
            $data['img_blob']
        );

        $listUser[] = $user;
        $listImage_profil[] = $image_profil;

    }
    header('Content-Type: application/json');
    echo json_encode();

}else{
    echo "Request error";
}

  echo "<pre>";
    print_r($listUser);
    print_r($listImage_profil);
    echo "</pre>";


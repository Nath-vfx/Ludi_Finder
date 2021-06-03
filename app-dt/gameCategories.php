<?php

// Appel la classe Game_Category
require_once 'classes/Game_Category.php';

//Création d'un objet PDO
require_once 'cnx.php';

// ordre SQL
$query = "SELECT * FROM `game_category`";


$request = $pdo->prepare($query);

$listGameCategory = array();

if($request->execute()) {
    while ($data = $request->fetch()) {
        $gameCategory = new game_category(
            $data['category_id'],
            $data['category_name'],
            $data['category_desc'],
            $data['category_icon']
        );

        $listGameCategory[] = $gameCategory;
    }
    header('Content-Type: application/json');
    echo json_encode($listGameCategory);
}else{
    echo "Request error";
}

/*    echo "<pre>";
    print_r($listGameCategory);
    echo "</pre>";*/

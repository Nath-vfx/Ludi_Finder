<?php

// Appel la classe Game_Category
require_once 'classes/Game_Card.php';

//Création d'un objet PDO
require_once 'cnx.php';

// ordre SQL
$query = "SELECT * FROM game_card";


$request = $pdo->prepare($query);

$listGameCard = array();

if($request->execute()) {
    while ($data = $request->fetch()) {
        $gameCard = new game_card(
            $data['game_id'],
            $data['category_game_id'],
            $data['game_name'],
            $data['game_author'],
            $data['game_editor'],
            $data['game_date'],
            $data['game_rules'],
            $data['game_time'],
            $data['game_goal'],
            $data['game_infos'],
            $data['game_img'],
            $data['game_desc_img'],
            $data['purchase_link']
        );

        $listGameCard[] = $gameCard;
    }
    header('Content-Type: application/json');
    echo json_encode($listGameCard);
}else{
    echo "Request error";
}

/*  echo "<pre>";
    print_r($listGameCard);
    echo "</pre>";*/
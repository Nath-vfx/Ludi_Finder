<?php

// Appel la classe Game_Category
require_once 'classes/Game_Card.php';

//Création d'un objet PDO
require_once 'cnx.php';

// ordre SQL
$query = "SELECT DISTINCT 
                game_card.game_id, 
                game_card.category_id, 
                game_card.game_name, 
                game_card.game_author,
                game_card.game_editor,
                game_card.game_date,
                game_card.game_rules,
                game_card.game_time,
                game_card.game_goal,
                game_card.game_infos,
                game_card.game_img,
                game_card.game_desc_img,
                game_card.purchase_link
            FROM game_card, game_category, belong
            WHERE game_category.category_id = belong.category_id 
            and belong.category_id = game_card.category_id 
            and game_category.category_id = 10
            ORDER BY game_card.game_name";


$request = $pdo->prepare($query);

$listGameCard = array();

if($request->execute()) {
    while ($data = $request->fetch()) {
        $gameCard = new game_card(
            $data['game_id'],
            $data['category_id'],
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

  /*echo "<pre>";
    print_r($listGameCard);
    echo "</pre>";*/
<?php
    header("Access-Control-Allow-Origin: *");

    require_once 'cnx.php';

    if(isset($_GET['game_name'])) {
        $sql = "INSERT INTO game_card (category_id, game_name, game_author, game_editor, game_date, game_rules, game_time, game_goal, game_infos, game_img, game_img_desc, purchase_link) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                $request = $pdo->prepare($sql);
                $request->bindParam(1, $_GET['category_id']);
                $request->bindParam(2, $_GET['game_name']);
                $request->bindParam(3, $_GET['game_author']);
                $request->bindParam(4, $_GET['game_editor']);
                $request->bindParam(5, $_GET['game_date']);
                $request->bindParam(6, $_GET['game_rules']);
                $request->bindParam(7, $_GET['game_time']);
                $request->bindParam(8, $_GET['game_goal']);
                $request->bindParam(9, $_GET['game_infos']);
                $request->bindParam(10, $_GET['game_img']);
                $request->bindParam(11, $_GET['game_img_desc']);
                $request->bindParam(12, $_GET['purchase_link']);
                echo $request->execute();
    }else{
        echo -1;
    }

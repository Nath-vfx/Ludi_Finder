<?php
    header("Access-Control-Allow-Origin: *");

    require_once 'cnx.php';

    if(isset($_POST['game_name'])) {
        $sql = "INSERT INTO game_card (category_id, game_name, game_author, game_editor, game_date, game_rules, game_time, game_goal, game_infos, purchase_link) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                $request = $pdo->prepare($sql);
                $request->bindParam(1, $_POST['category_id']);
                $request->bindParam(2, $_POST['game_name']);
                $request->bindParam(3, $_POST['game_author']);
                $request->bindParam(4, $_POST['game_editor']);
                $request->bindParam(5, $_POST['game_date']);
                $request->bindParam(6, $_POST['game_rules']);
                $request->bindParam(7, $_POST['game_time']);
                $request->bindParam(8, $_POST['game_goal']);
                $request->bindParam(9, $_POST['game_infos']);
                $request->bindParam(10, $_POST['purchase_link']);
                echo $request->execute();
    }else{
        echo -1;
    }

<?php

/* Generated from GenMyModel */

class Game_Card
{
    private $id;
    private $category_id;
    public $game_name;
    public $game_author;
    public $game_editor;
    public $game_date;
    public $game_rules;
    public $game_time;
    public $game_goal;
    public $game_infos;
    public $game_img;
    public $game_desc_img;
    public $purchase_link;

    /**
     * Game_Card constructor.
     * @param $id
     * @param $category_id
     * @param $game_name
     * @param $game_author
     * @param $game_editor
     * @param $game_date
     * @param $game_rules
     * @param $game_time
     * @param $game_goal
     * @param $game_infos
     * @param $game_img
     * @param $game_desc_img
     * @param $purchase_link
     */
    public function __construct($id, $category_id, $game_name, $game_author, $game_editor, $game_date, $game_rules, $game_time, $game_goal, $game_infos, $game_img, $game_desc_img, $purchase_link)
    {
        $this->id = $id;
        $this->category_id = $category_id;
        $this->game_name = $game_name;
        $this->game_author = $game_author;
        $this->game_editor = $game_editor;
        $this->game_date = $game_date;
        $this->game_rules = $game_rules;
        $this->game_time = $game_time;
        $this->game_goal = $game_goal;
        $this->game_infos = $game_infos;
        $this->game_img = $game_img;
        $this->game_desc_img = $game_desc_img;
        $this->purchase_link = $purchase_link;
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getCategoryId()
    {
        return $this->category_id;
    }

    /**
     * @param mixed $category_id
     */
    public function setCategoryId($category_id)
    {
        $this->category_id = $category_id;
    }

    /**
     * @return mixed
     */
    public function getGameName()
    {
        return $this->game_name;
    }

    /**
     * @param mixed $game_name
     */
    public function setGameName($game_name)
    {
        $this->game_name = $game_name;
    }

    /**
     * @return mixed
     */
    public function getGameAuthor()
    {
        return $this->game_author;
    }

    /**
     * @param mixed $game_author
     */
    public function setGameAuthor($game_author)
    {
        $this->game_author = $game_author;
    }

    /**
     * @return mixed
     */
    public function getGameEditor()
    {
        return $this->game_editor;
    }

    /**
     * @param mixed $game_editor
     */
    public function setGameEditor($game_editor)
    {
        $this->game_editor = $game_editor;
    }

    /**
     * @return mixed
     */
    public function getGameDate()
    {
        return $this->game_date;
    }

    /**
     * @param mixed $game_date
     */
    public function setGameDate($game_date)
    {
        $this->game_date = $game_date;
    }

    /**
     * @return mixed
     */
    public function getGameRules()
    {
        return $this->game_rules;
    }

    /**
     * @param mixed $game_rules
     */
    public function setGameRules($game_rules)
    {
        $this->game_rules = $game_rules;
    }

    /**
     * @return mixed
     */
    public function getGameTime()
    {
        return $this->game_time;
    }

    /**
     * @param mixed $game_time
     */
    public function setGameTime($game_time)
    {
        $this->game_time = $game_time;
    }

    /**
     * @return mixed
     */
    public function getGameGoal()
    {
        return $this->game_goal;
    }

    /**
     * @param mixed $game_goal
     */
    public function setGameGoal($game_goal)
    {
        $this->game_goal = $game_goal;
    }

    /**
     * @return mixed
     */
    public function getGameInfos()
    {
        return $this->game_infos;
    }

    /**
     * @param mixed $game_infos
     */
    public function setGameInfos($game_infos)
    {
        $this->game_infos = $game_infos;
    }

    /**
     * @return mixed
     */
    public function getGameImg()
    {
        return $this->game_img;
    }

    /**
     * @param mixed $game_img
     */
    public function setGameImg($game_img)
    {
        $this->game_img = $game_img;
    }

    /**
     * @return mixed
     */
    public function getGameDescImg()
    {
        return $this->game_desc_img;
    }

    /**
     * @param mixed $game_desc_img
     */
    public function setGameDescImg($game_desc_img)
    {
        $this->game_desc_img = $game_desc_img;
    }

    /**
     * @return mixed
     */
    public function getPurchaseLink()
    {
        return $this->purchase_link;
    }

    /**
     * @param mixed $purchase_link
     */
    public function setPurchaseLink($purchase_link)
    {
        $this->purchase_link = $purchase_link;
    }

}
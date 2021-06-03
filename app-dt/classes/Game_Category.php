<?php

/* Generated from GenMyModel */

class Game_Category {
	private $category_id = 0;
	public $category_name = null;
	public $category_desc = null;
	public $category_icon = null;

    /**
     * Game_Category constructor.
     * @param int $category_id
     * @param null $category_name
     * @param null $category_desc
     * @param null $category_icon
     */
    public function __construct($category_id, $category_name, $category_desc, $category_icon)
    {
        $this->category_id = $category_id;
        $this->category_name = $category_name;
        $this->category_desc = $category_desc;
        $this->category_icon = $category_icon;
    }

    /**
     * @return int
     */
    public function getCategoryId()
    {
        return $this->category_id;
    }

    /**
     * @param int $category_id
     */
    public function setCategoryId($category_id)
    {
        $this->category_id = $category_id;
    }

    /**
     * @return null
     */
    public function getCategoryName()
    {
        return $this->category_name;
    }

    /**
     * @param null $category_name
     */
    public function setCategoryName($category_name)
    {
        $this->category_name = $category_name;
    }

    /**
     * @return null
     */
    public function getCategoryDesc()
    {
        return $this->category_desc;
    }

    /**
     * @param null $category_desc
     */
    public function setCategoryDesc($category_desc)
    {
        $this->category_desc = $category_desc;
    }

    /**
     * @return null
     */
    public function getCategoryIcon()
    {
        return $this->category_icon;
    }

    /**
     * @param null $category_icon
     */
    public function setCategoryIcon($category_icon)
    {
        $this->category_icon = $category_icon;
    }


}

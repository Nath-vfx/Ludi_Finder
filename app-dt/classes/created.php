<?php

/* Generated from GenMyModel */

class created {
	public $creation_date;
	public $last_rewrite_date;

    /**
     * created constructor.
     * @param $creation_date
     * @param $last_rewrite_date
     */
    public function __construct($creation_date, $last_rewrite_date)
    {
        $this->creation_date = $creation_date;
        $this->last_rewrite_date = $last_rewrite_date;
    }

    /**
     * @return mixed
     */
    public function getCreationDate()
    {
        return $this->creation_date;
    }

    /**
     * @param mixed $creation_date
     */
    public function setCreationDate($creation_date)
    {
        $this->creation_date = $creation_date;
    }

    /**
     * @return mixed
     */
    public function getLastRewriteDate()
    {
        return $this->last_rewrite_date;
    }

    /**
     * @param mixed $last_rewrite_date
     */
    public function setLastRewriteDate($last_rewrite_date)
    {
        $this->last_rewrite_date = $last_rewrite_date;
    }

}

<?php

require_once('User.php');

class image_profil
{
    public $img_id;
    public $img_nom;
    public $img_taille;
    public $img_type;
    public $img_desc;
    public $img_blob;

    /**
     * image_profil constructor.
     * @param $img_id
     * @param $img_nom
     * @param $img_taille
     * @param $img_type
     * @param $img_desc
     * @param $img_blob
     */
    public function __construct($img_id, $img_nom, $img_taille, $img_type, $img_desc, $img_blob)
    {
        $this->img_id = $img_id;
        $this->img_nom = $img_nom;
        $this->img_taille = $img_taille;
        $this->img_type = $img_type;
        $this->img_desc = $img_desc;
        $this->img_blob = $img_blob;
    }

    /**
     * @return mixed
     */
    public function getImgId()
    {
        return $this->img_id;
    }

    /**
     * @param mixed $img_id
     */
    public function setImgId($img_id)
    {
        $this->img_id = $img_id;
    }

    /**
     * @return mixed
     */
    public function getImgNom()
    {
        return $this->img_nom;
    }

    /**
     * @param mixed $img_nom
     */
    public function setImgNom($img_nom)
    {
        $this->img_nom = $img_nom;
    }

    /**
     * @return mixed
     */
    public function getImgTaille()
    {
        return $this->img_taille;
    }

    /**
     * @param mixed $img_taille
     */
    public function setImgTaille($img_taille)
    {
        $this->img_taille = $img_taille;
    }

    /**
     * @return mixed
     */
    public function getImgType()
    {
        return $this->img_type;
    }

    /**
     * @param mixed $img_type
     */
    public function setImgType($img_type)
    {
        $this->img_type = $img_type;
    }

    /**
     * @return mixed
     */
    public function getImgDesc()
    {
        return $this->img_desc;
    }

    /**
     * @param mixed $img_desc
     */
    public function setImgDesc($img_desc)
    {
        $this->img_desc = $img_desc;
    }

    /**
     * @return mixed
     */
    public function getImgBlob()
    {
        return $this->img_blob;
    }

    /**
     * @param mixed $img_blob
     */
    public function setImgBlob($img_blob)
    {
        $this->img_blob = $img_blob;
    }

}
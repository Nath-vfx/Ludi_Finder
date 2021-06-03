<?php

/* Generated from GenMyModel */
require_once('image_profil.php');


class User
{
    private $id;
    public $mail;
    public $name;
    public $surname;
    public $pseudo;
    public $password;
    public $bio;
    public $profil_img;

    /**
     * User constructor.
     * @param $id
     * @param $mail
     * @param $name
     * @param $surname
     * @param $pseudo
     * @param $password
     * @param $bio
     * @param $profil_img
     */
    public function __construct($id, $mail, $name, $surname, $pseudo, $password, $bio, $profil_img)
    {
        $this->id = $id;
        $this->mail = $mail;
        $this->name = $name;
        $this->surname = $surname;
        $this->pseudo = $pseudo;
        $this->password = $password;
        $this->bio = $bio;
        $this->profil_img = $profil_img;
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
    public function getMail()
    {
        return $this->mail;
    }

    /**
     * @param mixed $mail
     */
    public function setMail($mail)
    {
        $this->mail = $mail;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getSurname()
    {
        return $this->surname;
    }

    /**
     * @param mixed $surname
     */
    public function setSurname($surname)
    {
        $this->surname = $surname;
    }

    /**
     * @return mixed
     */
    public function getPseudo()
    {
        return $this->pseudo;
    }

    /**
     * @param mixed $pseudo
     */
    public function setPseudo($pseudo)
    {
        $this->pseudo = $pseudo;
    }

    /**
     * @return mixed
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * @param mixed $password
     */
    public function setPassword($password)
    {
        $this->password = $password;
    }

    /**
     * @return mixed
     */
    public function getBio()
    {
        return $this->bio;
    }

    /**
     * @param mixed $bio
     */
    public function setBio($bio)
    {
        $this->bio = $bio;
    }

    /**
     * @return mixed
     */
    public function getProfilImg()
    {
        return $this->profil_img;
    }

    /**
     * @param mixed $profil_img
     */
    public function setProfilImg($profil_img)
    {
        $this->profil_img = $profil_img;
    }

}
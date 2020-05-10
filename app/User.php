<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Model
{

    protected $fillable = [
        'name', 'email', 'status', 'description'
    ];
    protected $hidden = [
        'remember_token'
    ];

    public function getRouteKeyName()
    {
        return 'id';
    }
    public function getPathAttribute() {
        return "/user/$this->id";
    }

}

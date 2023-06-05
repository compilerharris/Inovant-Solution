<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuid;

class Product extends Model
{
    use HasFactory, UUID;
    public function getCart(){
        return $this->hasMany('\App\Models\Cart','product_id')->where('user_id',1);
    }
}

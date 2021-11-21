<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit1dc6dcdfe043599185d0921e472a2106
{
    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'Whoops\\' => 7,
        ),
        'P' => 
        array (
            'Psr\\Log\\' => 8,
        ),
        'O' => 
        array (
            'Ospinto\\' => 8,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Whoops\\' => 
        array (
            0 => __DIR__ . '/..' . '/filp/whoops/src/Whoops',
        ),
        'Psr\\Log\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/log/Psr/Log',
        ),
        'Ospinto\\' => 
        array (
            0 => __DIR__ . '/..' . '/sunra/dbug',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit1dc6dcdfe043599185d0921e472a2106::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit1dc6dcdfe043599185d0921e472a2106::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit1dc6dcdfe043599185d0921e472a2106::$classMap;

        }, null, ClassLoader::class);
    }
}
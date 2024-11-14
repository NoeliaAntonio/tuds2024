-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-11-2024 a las 03:10:14
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `3tp2024`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `mostrarpacienteconid` (IN `id_paciente` INT, OUT `todo` JSON)   SELECT * 
FROM patients
WHERE id_paciente=patients.id$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `agendas`
--

CREATE TABLE `agendas` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `id_doctor` int(11) DEFAULT NULL,
  `consulta` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `agendas`
--

INSERT INTO `agendas` (`id`, `descripcion`, `id_doctor`, `consulta`, `createdAt`, `updatedAt`) VALUES
(5, 'turno comun', 15, 'clinicas', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'turno comun', 9, 'Pediatrica', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'turno comun', 10, 'dentista', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'turno comun', 18, 'clinica medica', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'turno comun', 17, 'diagnostico por imagen', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'turno comun', 19, 'clinica', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auditoriapaciente`
--

CREATE TABLE `auditoriapaciente` (
  `id_auditoriaDeletePaciente` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `fecha_de_ingreso` varchar(50) NOT NULL,
  `celular` varchar(50) NOT NULL,
  `genero` varchar(50) NOT NULL,
  `nacionalidad` varchar(50) NOT NULL,
  `provincia` varchar(50) NOT NULL,
  `localidad` varchar(50) NOT NULL,
  `dni` int(11) NOT NULL,
  `estadocivil` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `auditoriapaciente`
--

INSERT INTO `auditoriapaciente` (`id_auditoriaDeletePaciente`, `nombre`, `apellido`, `email`, `fecha_de_ingreso`, `celular`, `genero`, `nacionalidad`, `provincia`, `localidad`, `dni`, `estadocivil`) VALUES
(1, 's', 's', 's', 's', 's', 's', 's', 's', 's', 4, 's'),
(2, 'root@localhost', 'root@localhost', 'root@localhost', 'root@localhost', 'root@localhost', 'root@localhost', 'root@localhost', 'root@localhost', 'root@localhost', 0, 'root@localhost'),
(3, '?', 'root@localhost', 'root@localhost', 'root@localhost', 'root@localhost', 'root@localhost', 'root@localhost', 'root@localhost', 'root@localhost', 0, 'root@localhost'),
(4, 'root@localhost', 'root@localhost', 'root@localhost', 'root@localhost', 'root@localhost', 'root@localhost', 'root@localhost', 'root@localhost', 'root@localhost', 0, 'root@localhost');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctors`
--

CREATE TABLE `doctors` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `nacimiento` varchar(50) DEFAULT NULL,
  `genero` varchar(50) DEFAULT NULL,
  `direccion` varchar(50) DEFAULT NULL,
  `celular` varchar(50) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `sucursal` varchar(50) DEFAULT NULL,
  `biografia` varchar(50) DEFAULT NULL,
  `matricula` varchar(50) DEFAULT NULL,
  `dni` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `doctors`
--

INSERT INTO `doctors` (`id`, `nombre`, `apellido`, `email`, `nacimiento`, `genero`, `direccion`, `celular`, `imagen`, `sucursal`, `biografia`, `matricula`, `dni`, `createdAt`, `updatedAt`) VALUES
(9, 'Martha', 'Medina', 'medina@gmail.com', '1991-05-08', 'femenino', 'alma fuerte 376', '234333', 'doctores.webp', 'av.illia 345', 'el mejor', 'a23', 112233, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'Diego ', 'Ostanelli', 'diego@gmail.com', '1999-06-08', 'masculino', 'alma fuerte 4567', '2665009988', 'doctores.webp', 'av.illia 45', '--', 'erd', 899, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 'Sergio ', 'Porporato', 'porporato@gmail.com', '1949-06-07', 'masculino', 'costanera sur 123', '2665771010', 'doctores.webp', 'consultorio plaza', '---', 'yhjki23', 300001456, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 'Amadeo', 'Pastorotu', 'amadeo@gmail.com', '2024-11-03', 'masculino', 'Las Golondrinas 345', '2665882099', 'doctores.webp', 'av.illia 45', '---', 'gt56', 23490, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, 'FELIPE', 'ABAYAY', 'contrataciones@cmsanluis.com', '1973-02-13', 'masculino', 'BALCARCE Nro 739 - San Luis', '2664422029', 'doctores.webp', 'av.illia 45', '--', '--re', 10101111, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 'ROSA', 'ABDALA', 'gabyrabdala@yahoo.com.ar', '1983-06-07', 'femenino', 'ITUZAINGO Nro 1074 - San Luis', '2664441544', 'doctores.webp', 'av.illia 45', '--', 'hy67', 11001112, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historiaclinicas`
--

CREATE TABLE `historiaclinicas` (
  `id` int(11) NOT NULL,
  `id_paciente` int(11) NOT NULL,
  `fecha` varchar(50) DEFAULT NULL,
  `otromedico` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `historiaclinicas`
--

INSERT INTO `historiaclinicas` (`id`, `id_paciente`, `fecha`, `otromedico`, `createdAt`, `updatedAt`) VALUES
(2, 1, '2024-11-01', 'Meteo scalonte', '2024-11-02 15:29:43', '2024-11-02 15:29:43'),
(9, 1, '2024-11-13', 'Mateioppp', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 1, '2024-11-05', 'Mateio', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historiaregistro`
--

CREATE TABLE `historiaregistro` (
  `id` int(11) NOT NULL,
  `id_registro` int(11) NOT NULL,
  `id_historia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `historiaregistro`
--

INSERT INTO `historiaregistro` (`id`, `id_registro`, `id_historia`) VALUES
(1, 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horariomedicos`
--

CREATE TABLE `horariomedicos` (
  `id` int(11) NOT NULL,
  `id_doctor` int(11) NOT NULL,
  `fecha` varchar(255) DEFAULT NULL,
  `hora` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `patients`
--

CREATE TABLE `patients` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `fecha_de_ingreso` varchar(255) DEFAULT NULL,
  `celular` varchar(255) DEFAULT NULL,
  `genero` varchar(255) DEFAULT NULL,
  `nacionalidad` varchar(255) DEFAULT NULL,
  `provincia` varchar(255) DEFAULT NULL,
  `localidad` varchar(255) DEFAULT NULL,
  `dni` int(11) DEFAULT NULL,
  `estadocivil` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `patients`
--

INSERT INTO `patients` (`id`, `nombre`, `apellido`, `email`, `fecha_de_ingreso`, `celular`, `genero`, `nacionalidad`, `provincia`, `localidad`, `dni`, `estadocivil`, `createdAt`, `updatedAt`) VALUES
(1, 'Matilda', 'Andrada', 'andrada@gmail.com', '1989-06-05', '2665555544', 'femenino', 'AR', 'SAN LUIS', 'Villa mercedez', 123321, 'Casado', '2024-11-02 14:25:00', '2024-11-02 14:25:00'),
(11, 'Malena', 'Corte', 'malen@gmail.com', '1982-06-07', '23341567', 'femenino', 'AR', 'SAN LUIS', 'Villa Larca', 5673, 'soltero', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, ' MARIANA ', 'ADARO', 'marianaadaro@hotmail.com', '1981-01-12', '2665123532', 'femenino', 'AR', 'SAN LUIS', 'San Luis', 2345671, 'soltero', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'SUSANA', 'AGOSTI', 'convenios@cmsanluis.com', '1985-05-06', '2664441544', 'femenino', 'AR', 'SAN LUIS', 'San Luis', 56781, 'soltero', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 'OSCAR', 'AIRASCA', ' oscarat.6@hotmail.com', '2024-11-13', '02664423954', 'masculino', 'AR', 'SAN LUIS', 'San Luis', 3459013, 'soltero', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 'FERNANDO', 'FERNANDEZ', ' roxanarrieta@hotmail.com', '2024-11-13', '2664681476', 'masculino', 'AR', 'SAN LUIS', 'San Luis', 56710, 'soltero', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

--
-- Disparadores `patients`
--
DELIMITER $$
CREATE TRIGGER `triggerDeletePaciente` AFTER DELETE ON `patients` FOR EACH ROW INSERT INTO auditoriapaciente(nombre,apellido,email,fecha_de_ingreso,celular,genero,nacionalidad,provincia,localidad,dni,estadocivil)
VALUES(CURRENT_USER(),CURRENT_USER(),CURRENT_USER(),CURRENT_USER(),CURRENT_USER(),CURRENT_USER(),CURRENT_USER(),CURRENT_USER(),CURRENT_USER(),CURRENT_USER(),CURRENT_USER())
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro`
--

CREATE TABLE `registro` (
  `id` int(11) NOT NULL,
  `id_historiaclinica` int(11) NOT NULL,
  `alergia` varchar(50) DEFAULT NULL,
  `importancia` varchar(50) NOT NULL,
  `alergiadesde` varchar(50) NOT NULL,
  `alergiahasta` varchar(50) NOT NULL,
  `habito` varchar(50) DEFAULT NULL,
  `hdesde` varchar(50) NOT NULL,
  `hhasta` varchar(50) NOT NULL,
  `medicamento` varchar(50) DEFAULT NULL,
  `mfecha` varchar(50) NOT NULL,
  `antecedente_patologico` varchar(50) DEFAULT NULL,
  `adesde` varchar(50) NOT NULL,
  `ahasta` varchar(50) NOT NULL,
  `evolucion` varchar(255) NOT NULL,
  `diagnostico` varchar(50) NOT NULL,
  `estado` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `registro`
--

INSERT INTO `registro` (`id`, `id_historiaclinica`, `alergia`, `importancia`, `alergiadesde`, `alergiahasta`, `habito`, `hdesde`, `hhasta`, `medicamento`, `mfecha`, `antecedente_patologico`, `adesde`, `ahasta`, `evolucion`, `diagnostico`, `estado`, `createdAt`, `updatedAt`) VALUES
(1, 2, 'asma', 'alta', '22-08-24', '07-11-24', 'Fumar', '18-22-21', '07-11-24', 'amoccicilina356ml', '7-11-24', 'abuela con asma', '12-03-19', '07-06-24', 'mejorando con tratamiento', 'asma cronico', 'confirmado', '2024-11-04 13:28:44', '2024-11-04 13:28:44'),
(2, 2, 'Asma alérgico', 'alta', '2024-11-05', '2024-11-05', 'fumar', '2024-11-05', '2024-11-05', 'desalergin 500ml', '2024-11-05', 'abuela paterna problemas pulmonares', '2024-11-05', '2024-11-05', 'mejoria con tratamiento', 'sospecha de hernia', 'Confirmado', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 2, 'Rinitis alérgica', 'alta', '2024-11-11', '2024-11-19', 'fumar', '2024-11-05', '2024-11-05', 'desalergin 500ml', '2024-11-05', 'abuela paterna problemas pulmonares', '2024-11-05', '2024-11-06', 'mejoria con tratamiento', 'edema pulmonar', 'Confirmado', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 2, 'Rinitis alérgica', 'leve', '2024-11-01', '2024-11-05', 'fumar', '2024-11-01', '2024-11-05', 'asetato 500ml', '2024-11-05', '-----', '2024-11-01', '2024-11-05', 'mejoria con tratamiento', 'posible neumonia', 'Preliminar', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 9, 'Dermatitis atópica', 'alta', '2024-11-01', '2024-11-07', 'correr', '2024-11-01', '2024-11-07', 'cardio500ml', '2024-11-08', 'abuela paterna problemas pulmonares', '2024-11-01', '2024-11-07', 'mejoria con tratamiento', 'sospecha de hernia', 'Preliminar', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20241031101639-create-patients.js'),
('20241031101655-create-historiaclinica.js'),
('20241031101713-create-alergias.js'),
('20241031101727-create-diagnosis.js'),
('20241031101742-create-antecedente.js'),
('20241031101801-create-evolution.js'),
('20241031101819-create-medicine.js'),
('20241031101832-create-habit.js'),
('20241031101844-create-shift.js'),
('20241031101900-create-state.js'),
('20241031102003-create-specialty.js'),
('20241031102016-create-doctor.js'),
('20241031102032-create-agenda.js'),
('20241031132228-create-horariomedico.js'),
('20241031151206-create-registro.js'),
('20241101192910-create-mucho.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shifts`
--

CREATE TABLE `shifts` (
  `id` int(11) NOT NULL,
  `id_agenda` int(11) NOT NULL,
  `id_paciente` int(11) NOT NULL,
  `secuencia` varchar(255) DEFAULT NULL,
  `fecha` varchar(255) DEFAULT NULL,
  `hora` varchar(255) DEFAULT NULL,
  `id_estado` int(11) DEFAULT NULL,
  `motivo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `shifts`
--

INSERT INTO `shifts` (`id`, `id_agenda`, `id_paciente`, `secuencia`, `fecha`, `hora`, `id_estado`, `motivo`, `createdAt`, `updatedAt`) VALUES
(11, 6, 11, '1', '2024-11-13', '08:00', 1, 'clinicos', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 5, 12, '1', '2024-11-25', '08:00', 2, 'clinico', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 9, 12, '1', '2024-11-13', '10:00', 2, 'clinico', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 5, 13, '2', '2024-11-14', '08:30', 2, 'dolor de rodilla', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, 5, 15, '3', '2024-11-13', '09:00', 2, 'clinico', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 6, 1, '2', '2024-11-13', '08:30', 2, 'clinico', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, 7, 1, '1', '2024-11-13', '08:00', 2, 'clinico', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 7, 11, '2', '2024-11-13', '08:30', 2, 'clinico', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 10, 1, '1', '2024-11-13', '08:00', 2, 'clinico', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, 8, 14, '6', '2024-11-25', '09:20', 2, 'tos cronica', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `specialtys`
--

CREATE TABLE `specialtys` (
  `id` int(11) NOT NULL,
  `especialidad` varchar(255) DEFAULT NULL,
  `id_doctor` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `specialtys`
--

INSERT INTO `specialtys` (`id`, `especialidad`, `id_doctor`, `createdAt`, `updatedAt`) VALUES
(1, 'Cardiología', 9, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Pediatría', 9, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, ' Traumatología', 15, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Clínica Médica', 18, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Consultorios Externos', 18, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'Gastroenterología y Endoscopías', 18, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'Radiologia', 17, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'Diagnóstico por imágenes', 17, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `states`
--

CREATE TABLE `states` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `states`
--

INSERT INTO `states` (`id`, `descripcion`, `createdAt`, `updatedAt`) VALUES
(1, 'Atendido', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'esperando', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `rol` varchar(50) NOT NULL,
  `pass` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `user`, `name`, `rol`, `pass`) VALUES
(1, 'empleada', 'Noe', 'secretaria', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `agendas`
--
ALTER TABLE `agendas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_doctor` (`id_doctor`);

--
-- Indices de la tabla `auditoriapaciente`
--
ALTER TABLE `auditoriapaciente`
  ADD PRIMARY KEY (`id_auditoriaDeletePaciente`);

--
-- Indices de la tabla `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `historiaclinicas`
--
ALTER TABLE `historiaclinicas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_paciente` (`id_paciente`);

--
-- Indices de la tabla `historiaregistro`
--
ALTER TABLE `historiaregistro`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_registro` (`id_registro`),
  ADD KEY `id_historia` (`id_historia`);

--
-- Indices de la tabla `horariomedicos`
--
ALTER TABLE `horariomedicos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_doctor` (`id_doctor`);

--
-- Indices de la tabla `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `dni` (`dni`);

--
-- Indices de la tabla `registro`
--
ALTER TABLE `registro`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_registro` (`id_historiaclinica`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `shifts`
--
ALTER TABLE `shifts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_estado` (`id_estado`),
  ADD KEY `id_agenda` (`id_agenda`),
  ADD KEY `id_paciente` (`id_paciente`);

--
-- Indices de la tabla `specialtys`
--
ALTER TABLE `specialtys`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_doctor` (`id_doctor`);

--
-- Indices de la tabla `states`
--
ALTER TABLE `states`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `agendas`
--
ALTER TABLE `agendas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `auditoriapaciente`
--
ALTER TABLE `auditoriapaciente`
  MODIFY `id_auditoriaDeletePaciente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `doctors`
--
ALTER TABLE `doctors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `historiaclinicas`
--
ALTER TABLE `historiaclinicas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `historiaregistro`
--
ALTER TABLE `historiaregistro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `horariomedicos`
--
ALTER TABLE `horariomedicos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `patients`
--
ALTER TABLE `patients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `registro`
--
ALTER TABLE `registro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `shifts`
--
ALTER TABLE `shifts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `specialtys`
--
ALTER TABLE `specialtys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `states`
--
ALTER TABLE `states`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `agendas`
--
ALTER TABLE `agendas`
  ADD CONSTRAINT `agendas_ibfk_1` FOREIGN KEY (`id_doctor`) REFERENCES `doctors` (`id`);

--
-- Filtros para la tabla `historiaclinicas`
--
ALTER TABLE `historiaclinicas`
  ADD CONSTRAINT `historiaclinicas_ibfk_1` FOREIGN KEY (`id_paciente`) REFERENCES `patients` (`id`);

--
-- Filtros para la tabla `historiaregistro`
--
ALTER TABLE `historiaregistro`
  ADD CONSTRAINT `historiaregistro_ibfk_1` FOREIGN KEY (`id_historia`) REFERENCES `historiaclinicas` (`id`),
  ADD CONSTRAINT `historiaregistro_ibfk_2` FOREIGN KEY (`id_registro`) REFERENCES `registro` (`id`);

--
-- Filtros para la tabla `horariomedicos`
--
ALTER TABLE `horariomedicos`
  ADD CONSTRAINT `horariomedicos_ibfk_1` FOREIGN KEY (`id_doctor`) REFERENCES `doctors` (`id`);

--
-- Filtros para la tabla `registro`
--
ALTER TABLE `registro`
  ADD CONSTRAINT `registro_ibfk_1` FOREIGN KEY (`id_historiaclinica`) REFERENCES `historiaclinicas` (`id`);

--
-- Filtros para la tabla `shifts`
--
ALTER TABLE `shifts`
  ADD CONSTRAINT `shifts_ibfk_1` FOREIGN KEY (`id_estado`) REFERENCES `states` (`id`),
  ADD CONSTRAINT `shifts_ibfk_2` FOREIGN KEY (`id_agenda`) REFERENCES `agendas` (`id`),
  ADD CONSTRAINT `shifts_ibfk_3` FOREIGN KEY (`id_paciente`) REFERENCES `patients` (`id`);

--
-- Filtros para la tabla `specialtys`
--
ALTER TABLE `specialtys`
  ADD CONSTRAINT `specialtys_ibfk_1` FOREIGN KEY (`id_doctor`) REFERENCES `doctors` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

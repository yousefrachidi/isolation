-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 18 fév. 2020 à 14:41
-- Version du serveur :  10.4.11-MariaDB
-- Version de PHP : 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `iso`
--

-- --------------------------------------------------------

--
-- Structure de la table `info_1`
--

CREATE TABLE `info_1` (
  `id_person` int(11) NOT NULL,
  `nom` varchar(15) DEFAULT NULL,
  `prenom` varchar(15) DEFAULT NULL,
  `sutiation` varchar(15) DEFAULT NULL,
  `mode_chauf` varchar(15) DEFAULT NULL,
  `comble` varchar(15) DEFAULT NULL,
  `sous` varchar(15) DEFAULT NULL,
  `garage` varchar(15) DEFAULT NULL,
  `surfac_c` varchar(20) DEFAULT NULL,
  `surfac_s` varchar(20) DEFAULT NULL,
  `surfac_g` varchar(20) DEFAULT NULL,
  `email` varchar(15) DEFAULT NULL,
  `codep` varchar(5) DEFAULT NULL,
  `commune` varchar(15) DEFAULT NULL,
  `adress` varchar(15) DEFAULT NULL,
  `tel` varchar(20) DEFAULT NULL,
  `nombre_pr` varchar(15) DEFAULT NULL,
  `revenu` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `info_1`
--

INSERT INTO `info_1` (`id_person`, `nom`, `prenom`, `sutiation`, `mode_chauf`, `comble`, `sous`, `garage`, `surfac_c`, `surfac_s`, `surfac_g`, `email`, `codep`, `commune`, `adress`, `tel`, `nombre_pr`, `revenu`) VALUES
(5, 'ysf', 'r', 'maison', 'gaz', 'Comble', 'undefined', 'undefined', '', '', '', 'ha@gmail.com', '12345', 'casa', 'casa ville', '1234567890', '1', ' Moin 18960 €'),
(6, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(7, 'ss', 'k', 'locataire', 'Electricite', 'null', 'null', 'Garage', 'null', 'null', 'null', 'ha@gmail.com', '12345', 'qw', 'qw', '1234567890', '2', ' Plus 27729 €'),
(8, 'ysf', 'youns', 'locataire', 'Electricite', 'null', 'Sous_sol', 'Garage', 'null', 'null', 'null', 'hasna@gmail.com', '12345', 'ewr', 'wer', '1234567890', '2', ' Plus 27729 €'),
(9, 'gfhgfhgf', 'gfdgfdgd', 'undefined', 'undefined', 'null', 'null', 'null', 'null', 'null', 'null', 'gdgfdgfd', 'undef', 'undefined', 'undefined', '12334556677', '3 ', ' Plus 33346 €'),
(10, 'ss', 'w', 'maison', 'gaz', 'Comble', 'null', 'null', 'null', 'null', 'null', 'youssefrachidi1', '12345', 'as', 'as', '1234567899', '12', 'Moin 83911 €'),
(11, 'ysf', 'sliman', 'maison', 'Electricite', 'null', 'Sous_sol', 'null', 'null', 'null', 'null', 'youssefrachidi1', '12345', 'er', 'er', '1234567890', '12', 'Moin 83911 €'),
(12, 'ss', 'w', 'locataire', 'Electricite', 'null', 'Sous_sol', 'null', 'null', 'null', 'null', 'youssefrachidi1', '12345', 'as', 'asd', '1234567890', '9', 'Moin 67060 €'),
(13, 'rachidi', 's', 'locataire', 'Electricite', 'null', 'Sous_sol', 'null', 'null', '   Entre 25 et 40 m2', 'null', 'yousef@gmail.co', '12345', 'jk', 'jk', '1234567890', '12', ' Plus 83911 €'),
(14, 'casa', 'casa', 'maison', 'gaz', 'Comble', 'null', 'null', ' Plus de 40 m2 ', 'null', 'null', 'yousef@gmail.co', '99999', 'casa', 'casa', '1234567890', '12', 'Moin 83911 €'),
(15, 'ss', 'simo', 'locataire', 'Electricite', 'null', 'Sous_sol', 'null', 'null', '   Entre 25 et 40 m2', 'null', 'youssefrachidi1', '12345', 'as', 'as', '1234567890', '12', 'Moin 83911 €'),
(16, 'ysf', 'd', 'locataire', 'Electricite', 'null', 'Sous_sol', 'null', 'null', '   Entre 25 et 40 m2', 'null', 'youssefrachidi1', '12345', 'er', 'er', '1234567890', '12', 'Moin 83911 €'),
(17, 'ysf', 'd', 'locataire', 'Electricite', 'Comble', 'null', 'null', '   Entre 25 et 40 m2', 'null', 'null', 'hasnay18@gmail.', '12345', 'd', 'fd', '1234567890', '12', 'Moin 83911 €'),
(18, 'ss', 'sliman', 'maison', 'gaz', 'Comble', 'null', 'null', '   Entre 25 et 40 m2', 'null', 'null', 'hasnay18@gmail.', '12345', 'e', 'er', '1234567890', '12', 'Moin 83911 €'),
(19, 'ss', 'sliman', 'maison', 'gaz', 'Comble', 'null', 'null', '   Entre 25 et 40 m2', 'null', 'null', 'youssefrachidi1', '12345', 'er', 're', '1234567890', '12', ' Plus 83911 €'),
(20, 'ysf', 'd', 'locataire', 'Electricite', 'null', 'Sous_sol', 'null', 'null', ' Plus de 40 m2 ', 'null', 'hasnay18@gmail.', '12345', 'ef', 'dgfg', '1234567890', '12', ' Plus 83911 €');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `info_1`
--
ALTER TABLE `info_1`
  ADD PRIMARY KEY (`id_person`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `info_1`
--
ALTER TABLE `info_1`
  MODIFY `id_person` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

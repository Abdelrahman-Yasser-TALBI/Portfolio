<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Remplace les adresses e-mail suivantes par ton propre e-mail
    $destinataire = "yassser.talbi@gmail.com";
    $sujet = "Nouveau message de $nom";
    $contenu = "De: $nom\n";
    $contenu .= "E-mail: $email\n\n";
    $contenu .= "Message:\n$message";

    // En-têtes de l'e-mail
    $headers = "De: $email\r\n";
    $headers .= "Répondre à: $email\r\n";

    // Envoi de l'e-mail
    mail($destinataire, $sujet, $contenu, $headers);

    // Redirection vers une page de confirmation
    header("Location: contacte.html");
}
?>

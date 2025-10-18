<?php
// ===============================
//  CONFIGURACIÓN GENERAL
// ===============================
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// ===== RUTAS CORRECTAS =====
// (Asegúrate de que existan estos archivos dentro de PHPMailer/src/)
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

// ===== TUS DATOS =====
$correo_receptor = "janmat777@gmail.com"; // A dónde se envían los mensajes
$correo_envio    = "janmat777@gmail.com"; // Tu cuenta Gmail (debe coincidir con la contraseña de app)
$nombre_envio    = "Neomodulus Web";
$clave_app       = "dklehbzecvlqnrwb"; // Contraseña de aplicación Gmail (sin espacios)
$asunto_general  = "Nuevo mensaje desde el formulario de Neomodulus";

// ===============================
//  FUNCIÓN DE LIMPIEZA
// ===============================
function limpiar($campo) {
  return htmlspecialchars(strip_tags(trim($campo)));
}

// ===============================
//  PROCESAR FORMULARIO
// ===============================
if ($_SERVER["REQUEST_METHOD"] === "POST") {

  // Campos del formulario
  $nombre  = limpiar($_POST["nombre"] ?? '');
  $email   = limpiar($_POST["email"] ?? '');
  $asunto  = limpiar($_POST["asunto"] ?? '');
  $mensaje = limpiar($_POST["mensaje"] ?? '');
  $honeypot = $_POST["website"] ?? '';

  // Anti-spam (campo oculto)
  if (!empty($honeypot)) {
    http_response_code(403);
    echo "Spam detectado.";
    exit;
  }

  // Validaciones
  if (!$nombre || !$email || !$asunto || !$mensaje) {
    http_response_code(400);
    echo "Faltan datos obligatorios.";
    exit;
  }
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo "Correo electrónico inválido.";
    exit;
  }

  // ===============================
  //  CONTENIDO DEL CORREO
  // ===============================
  $subject = "$asunto_general - $asunto";

  // Cuerpo del correo (texto plano)
  $body  = "Has recibido un nuevo mensaje desde tu web:\n\n";
  $body .= "Nombre: $nombre\n";
  $body .= "Correo: $email\n";
  $body .= "Asunto: $asunto\n\n";
  $body .= "Mensaje:\n$mensaje\n\n";
  $body .= "Enviado el: " . date("d/m/Y H:i") . "\n";

  // ===============================
  //  CONFIGURAR Y ENVIAR PHPMailer
  // ===============================
  $mail = new PHPMailer(true);

  try {
    // Configuración del servidor SMTP (Gmail)
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $correo_envio;
    $mail->Password = $clave_app;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Remitente y destinatario
    $mail->setFrom($correo_envio, $nombre_envio);
    $mail->addAddress($correo_receptor);
    $mail->addReplyTo($email, $nombre);

    // Contenido
    $mail->isHTML(false);
    $mail->Subject = $subject;
    $mail->Body    = $body;

    // Enviar
    $mail->send();
    http_response_code(200);
    echo "success";

  } catch (Exception $e) {
    http_response_code(500);
    echo "❌ Error al enviar: " . $mail->ErrorInfo;
  }

} else {
  http_response_code(405);
  echo "Método no permitido.";
}
?>

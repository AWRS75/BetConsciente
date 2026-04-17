#include <QApplication>
#include <QWidget>
#include <QVBoxLayout>
#include <QLineEdit>
#include <QPushButton>
#include <QLabel>
#include <QGraphicsDropShadowEffect>
#include <QMessageBox> // Necessário para as mensagens de alerta
#include <QRadioButton>
#include <QButtonGroup>
#include <QHBoxLayout>
#include <QPixmap>
#include <QColor>

int main(int argc, char *argv[]) {
    QApplication app(argc, argv);

    // --- Janela Principal ---
    QWidget window;
    window.setWindowTitle("App - BetConsciente");
    window.setFixedSize(550, 900);
    window.setStyleSheet("background-color: #e3f2fd;");

    // --- Container central (Card) ---
    QWidget *card = new QWidget(&window);
    card->setFixedSize(480, 800);
    card->move(35, 50);
    card->setStyleSheet("QWidget { background-color: white; border-radius: 15px; }");

    QGraphicsDropShadowEffect *shadow = new QGraphicsDropShadowEffect();
    shadow->setBlurRadius(20);
    shadow->setXOffset(0);
    shadow->setYOffset(5);
    shadow->setColor(QColor(0, 0, 0, 80));
    card->setGraphicsEffect(shadow);

    QVBoxLayout *layout = new QVBoxLayout(card);
    layout->setContentsMargins(30, 40, 30, 40);
    layout->setSpacing(15);

    QLabel *title = new QLabel("Admin Access");
    title->setStyleSheet("font-size: 22px; font-weight: bold; color: #1565c0; border: none;");
    title->setAlignment(Qt::AlignCenter);

    // --- Logo ---
    QLabel *logo = new QLabel();
    QPixmap pixmap("logo.png"); // Carrega do arquivo direto
    if (!pixmap.isNull()) {
        logo->setPixmap(pixmap.scaled(300, 300, Qt::KeepAspectRatio, Qt::SmoothTransformation));
        logo->setAlignment(Qt::AlignCenter);
    } else {
        logo->setText("BetConsciente"); // Fallback para texto se a imagem não for encontrada
        logo->setStyleSheet("font-size: 28px; font-weight: bold; color: #1565c0; border: none;");
        logo->setAlignment(Qt::AlignCenter);
    }

    // --- Seleção de Tipo de Usuário ---
    QLabel *roleLabel = new QLabel("Tipo de Usuário:");
    roleLabel->setStyleSheet("font-size: 14px; color: #1565c0;");

    QRadioButton *adminRadio = new QRadioButton("Administrador");
    adminRadio->setChecked(true); // Padrão admin
    QRadioButton *userRadio = new QRadioButton("Usuário");

    QButtonGroup *roleGroup = new QButtonGroup();
    roleGroup->addButton(adminRadio, 0);
    roleGroup->addButton(userRadio, 1);

    QHBoxLayout *roleLayout = new QHBoxLayout();
    roleLayout->addWidget(adminRadio);
    roleLayout->addWidget(userRadio);
    roleLayout->setSpacing(20);

    QString inputStyle = "QLineEdit {"
                         "  border: 1px solid #bbdefb;"
                         "  border-radius: 8px;"
                         "  padding: 10px;"
                         "  background-color: #f8faff;"
                         "  color: #0d47a1;"
                         "}"
                         "QLineEdit:focus { border: 2px solid #2196f3; }";

    QLineEdit *emailEdit = new QLineEdit();
    emailEdit->setPlaceholderText("E-mail do Administrador");
    emailEdit->setStyleSheet(inputStyle);

    QLineEdit *passEdit = new QLineEdit();
    passEdit->setPlaceholderText("Senha");
    passEdit->setEchoMode(QLineEdit::Password);
    passEdit->setStyleSheet(inputStyle);

    QPushButton *loginBtn = new QPushButton("ENTRAR");
    loginBtn->setCursor(Qt::PointingHandCursor);
    loginBtn->setStyleSheet(
        "QPushButton { background-color: #1565c0; color: white; font-weight: bold; border-radius: 8px; padding: 12px; }"
        "QPushButton:hover { background-color: #1e88e5; }"
        );

    // --- Esqueci minha senha ---
    QPushButton *forgotBtn = new QPushButton("Esqueci minha senha");
    forgotBtn->setFlat(true);
    forgotBtn->setStyleSheet("QPushButton { color: #2196f3; text-decoration: underline; border: none; }");
    forgotBtn->setCursor(Qt::PointingHandCursor);

    layout->addWidget(logo);
    layout->addWidget(title);
    layout->addWidget(roleLabel);
    layout->addLayout(roleLayout);
    layout->addStretch();
    layout->addWidget(emailEdit);
    layout->addWidget(passEdit);
    layout->addWidget(forgotBtn);
    layout->addStretch();
    layout->addWidget(loginBtn);

    // --- LÓGICA DE LOGIN ---
    QObject::connect(loginBtn, &QPushButton::clicked, [&]() {
        QString email = emailEdit->text();
        QString senha = passEdit->text();
        int role = roleGroup->checkedId();

        bool success = false;
        QString successMsg;
        if (role == 0) { // Admin
            if (email == "admin@gmail.com" && senha == "123") {
                success = true;
                successMsg = "Logado como Administrador com sucesso!";
            }
        } else { // User
            if (email == "user@gmail.com" && senha == "456") {
                success = true;
                successMsg = "Logado como Usuário com sucesso!";
            }
        }

        if (success) {
            QMessageBox::information(&window, "Sucesso", successMsg);
            // Aqui você poderia abrir uma nova janela, por exemplo:
            // window.hide();
        } else {
            QMessageBox::warning(&window, "Erro", "E-mail ou senha incorretos.");
        }
    });

    // --- LÓGICA DE ESQUECI SENHA ---
    QObject::connect(forgotBtn, &QPushButton::clicked, [&]() {
        QMessageBox::information(&window, "Esqueci Senha", "Entre em contato com o administrador para redefinir sua senha.");
    });

    window.show();
    return app.exec();
}
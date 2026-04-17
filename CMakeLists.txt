cmake_minimum_required(VERSION 3.16)

project(BetConsciente VERSION 0.1 LANGUAGES CXX)

set(CMAKE_AUTOUIC ON)
set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Busca o pacote do Qt (Widgets é necessário para a interface gráfica)
find_package(Qt6 REQUIRED COMPONENTS Widgets)

add_executable(appBetConsciente
    main.cpp
    resources.qrc
)

# Faz a ligação (link) entre o seu código e a biblioteca do Qt
target_link_libraries(appBetConsciente PRIVATE Qt6::Widgets)
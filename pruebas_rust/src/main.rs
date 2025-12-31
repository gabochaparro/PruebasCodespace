enum Estado {
    Activo,
    Inactivo,
}

impl Estado {
    fn descripcion(&self) -> &str {
        match self {
            Estado::Activo => "Está activo",
            Estado::Inactivo => "Está inactivo",
        }
    }
}

fn main() {
    let mut e = Estado::Activo;
    println!("{}", e.descripcion());
    e = Estado::Inactivo;
    println!("Descripción: {}", e.descripcion())
}


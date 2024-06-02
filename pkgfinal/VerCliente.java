/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package pkgfinal;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.BorderFactory;
import javax.swing.BoxLayout;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.table.DefaultTableModel;

/**
 *
 * @author alumne-DAM
 */
public class VerCliente {

    /**
     * Muestra la pantalla principal de gestión de clientes.
     *
     * @param args Los argumentos de la línea de comandos.
     */
    public static void showClientScreen(String[] args) {
        /**
         * @param nombre El nombre del nuevo cliente
         * @param apellidos El apellidos del nuevo cliente
         * @param dni El dni del nuevo cliente
         */
        String url = "jdbc:mysql://localhost:3306/final";

        JFrame frame = new JFrame();
        frame.setTitle("Tabla");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JPanel panel = new JPanel();
        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));
        panel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
        frame.setSize(800, 800);

        JButton AgregarCliente = new JButton("Agregar cliente");
        AgregarCliente.addActionListener(new ActionListener() {

            @Override
            public void actionPerformed(ActionEvent e) {
                agregarCliente();
            }
        });

        panel.add(AgregarCliente);
        DefaultTableModel dataModel = new DefaultTableModel();
        JTable table = new JTable(dataModel);
        JScrollPane scrollpane = new JScrollPane(table);

        dataModel.setColumnIdentifiers(new String[]{"id", "nombre", "apellidos", "DNI"});

        try (Connection conexion = DriverManager.getConnection(url, "root", ""); PreparedStatement ps = conexion.prepareStatement("SELECT * FROM cliente"); ResultSet rs = ps.executeQuery()) {

            while (rs.next()) {
                int id = rs.getInt("id");
                String nombre = rs.getString("nombre");
                String apellidos = rs.getString("apellidos");
                String dni = rs.getString("DNI");
                dataModel.addRow(new Object[]{id, nombre, apellidos, dni});
            }

        } catch (java.sql.SQLException ex) {
            Logger.getLogger(VerCliente.class.getName()).log(Level.SEVERE, null, ex);
        }
        panel.add(scrollpane);
        frame.add(panel);
        frame.setVisible(true);

    }

    /**
     * Metodo que permite añadir un cliente
     */
    private static void agregarCliente() {
        JFrame frame = new JFrame("Agregar Cliente");
        frame.setSize(400, 300);
        JPanel panel = new JPanel();
        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));
        panel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));

        JLabel nombreLabel = new JLabel("Nombre:");
        JTextField nombreField = new JTextField();
        JLabel apellidosLabel = new JLabel("Apellidos:");
        JTextField apellidosField = new JTextField();
        JLabel dniLabel = new JLabel("DNI:");
        JTextField dniField = new JTextField();
        JButton agregarButton = new JButton("Agregar");
        agregarButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String nombre = nombreField.getText();
                String apellidos = apellidosField.getText();
                String dni = dniField.getText();

                try {
                    Connection conexion = DriverManager.getConnection("jdbc:mysql://localhost:3306/final", "root", "");
                    String cliente = "INSERT INTO cliente VALUES (?, ?, ?, ?)";
                    PreparedStatement myst = conexion.prepareStatement(cliente);

                    myst.setString(1, null);
                    myst.setString(2, nombre);
                    myst.setString(3, apellidos);
                    myst.setString(4, dni);
                    myst.executeUpdate();

                    conexion.close();
                } catch (java.sql.SQLException ex) {
                    ex.printStackTrace();
                }

            }
        });

        panel.add(nombreLabel);
        panel.add(nombreField);
        panel.add(apellidosLabel);
        panel.add(apellidosField);
        panel.add(dniLabel);
        panel.add(dniField);
        panel.add(agregarButton);

        frame.add(panel);
        frame.setVisible(true);
    }
}
